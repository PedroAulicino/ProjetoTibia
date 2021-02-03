import React, { useState } from "react";
import { parseLootYML } from "../../Utility/stringparser";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./loot.css";
import { TextareaAutosize, Typography } from "@material-ui/core";
import styled from "styled-components";

export default function PartyLoot() {
  function getStepContent(step, data) {
    switch (step) {
      case 0:
        return (
          <TextareaAutosize
            name=''
            rows={10}
            cols={10}
            id='data'
            placeholder='Party hunt analyzer'
            aria-label='party hunt analyzer data'
            onChange={(e) => {
              setstate(e.target.value);
            }}
          />
        );
      case 1:
        return { message: "Results for all of your hunt.", ...data };
      default:
        return "Unknown step";
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [state, setstate] = useState("");
  const [Data, setData] = useState(null);

  const handleSumbit = (e) => {
    if (state) {
      const rawData = parseLootYML(state);
      if (rawData) {
        setData(rawData);
      }
    }
  };

  return (
    <PartyLootStyled {...Data}>
      {activeStep === 0 ? (
        <div>
          <Typography>{getStepContent(0)}</Typography>
          <div>
            <Button
              disabled={!state}
              color='success'
              onClick={() => {
                handleSumbit();
                handleNext();
              }}
            >
              Submit
            </Button>

            <Link to='/'>
              <Button>Voltar</Button>
            </Link>
          </div>
        </div>
      ) : (
        Data && (
          <div>
            <div id='results'>
              <div className='fon'>
                <h3>
                  Cada player teve profit
                  {Data.profit > 0 ? " de: " : " de: "}
                  <span style={{ color: Data.profit > 0 ? "green" : "red" }}>
                    {Math.floor(Data.profit).toLocaleString()} GP
                  </span>
                </h3>
                <p className='resultsLoot'>
                  Total Loot: {Math.floor(Data.loot).toLocaleString()} GP
                </p>
                <p className='resultsLoot'>
                  Total Suplies: {Math.floor(Data.supplies).toLocaleString()} GP
                </p>
              </div>

              <div className='resultsBody'>
                {Data.players.map((player, idx) => (
                  <PlayerElement key={idx} {...player}>
                    <div id='pagewrap'>
                      <div className='gallery'>
                        <article className='image'>
                          <h1> {player.name}</h1>

                          <h3 className='resultsBalance'>
                            Balance:
                            <span>
                              {Math.floor(player.balance).toLocaleString()} GP
                            </span>
                          </h3>

                          <h3 className='resultsProfit'>
                            Profit:
                            <span>
                              {Math.floor(Data.profit).toLocaleString()} GP
                            </span>
                          </h3>
                          <h3 className='resultsPayout'>
                            Supplies:
                            <span>
                              {Math.floor(player.supplies).toLocaleString()} GP
                            </span>
                          </h3>
                          <h3 className='resultsPayout'>
                            Dano:
                            <span>
                              {Math.floor(player.damage).toLocaleString()}
                            </span>
                          </h3>
                          <br></br>
                          <h2 className='resultsPayout'>
                            Pagamento:
                            <span>
                              {Math.floor(player.payOut).toLocaleString()} GP
                            </span>
                          </h2>
                        </article>
                      </div>
                    </div>
                  </PlayerElement>
                ))}
              </div>
              <button
                className='botao'
                disabled={activeStep === 0}
                variant='danger'
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        )
      )}
    </PartyLootStyled>
  );
}

const PartyLootStyled = styled.div`
  width: 100%;
  overflow: none;
  #data {
    resize: none;
    width: 90vw;
    height: 80vh;
    max-width: 500px;
    max-height: 550px;
  }
  .resultsHeader {
    width: 100%;
  }
  .resultsBody {
    display: flex;

    justify-content: space-evenly;
  }
  #results {
    display: flex;
    flex-direction: column;
    button {
      align-self: flex-end;
    }
  }
`;

const PlayerElement = styled.div`
  width: 21rem;
  margin: 1em 5px;
  font-size: 1rem;

  p {
    margin: 0;
  }

  .resultsPayout {
    span {
      color: ${({ payOut }) => (payOut > 0 ? "green" : "red")};
    }
  }
  .resultsProfit {
    span {
      color: ${({ profit }) => (profit > 0 ? "green" : "red")};
    }
  }
  .resultsBalance {
    span {
      color: ${({ balance }) => (balance > 0 ? "green" : "red")};
    }
  }
`;
