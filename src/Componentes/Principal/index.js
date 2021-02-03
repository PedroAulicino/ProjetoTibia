import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./home.css";

function Input() {
  const [level, setLevel] = useState("");
  const [finallvl, finalSetLvl] = useState("");
  const [Results, setResults] = useState("");

  const [classe, Setclasse] = useState("1.1");
  const [WeaponCharges, SetWeaponCharges] = useState("305000");
  const [Double, setDouble] = useState("");
  const [Dummy, SetDummy] = useState("");
  const [loyalty, setloyalty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let soma = [];

    for (let i = parseInt(level); i < finallvl; i++) {
      const Formula = Math.round(Math.ceil(1600 * Math.pow(classe, i)));
      const Calcular = Math.round(Formula / WeaponCharges);
      soma.push(Calcular);
    }
    let co = 1;

    for (let i = 0; i < soma.length; i++) {
      const resultado = (co += soma[i]);
      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    }
    if (Double && Dummy && loyalty) {
      const porcentagemDoubleExp = (co * Double) / 100;
      const porcentagemDummy = (porcentagemDoubleExp * 10) / 100;
      const calcu = porcentagemDoubleExp + porcentagemDummy;
      const resultadoo = Math.ceil(co - calcu);
      const porcentagemloyalty = Math.ceil((resultadoo * loyalty) / 100);
      const resultado = Math.ceil(resultadoo - porcentagemloyalty);
      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      const horas = Math.round((resultado * 16.4) / 60);
      console.log(horas);
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    } else if (Double && Dummy) {
      const porcentagemDoubleExp = (co * Double) / 100;
      const porcentagemDummy = (porcentagemDoubleExp * 10) / 100;
      const calcu = porcentagemDoubleExp + porcentagemDummy;
      const resultado = Math.ceil(co - calcu);

      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      const horas = (resultado * 16.4) / 60;
      console.log(horas);
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    } else if (Dummy && loyalty) {
      const dummy = (co * Dummy) / 100;
      const resultadoo = Math.ceil(co - dummy);
      const porcentagemloyalty = Math.ceil((resultadoo * loyalty) / 100);
      const resultado = Math.ceil(resultadoo - porcentagemloyalty);

      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      const horas = (resultado * 16.4) / 60;
      console.log(horas);
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    } else if (Dummy) {
      const dummy = (co * Dummy) / 100;
      const resultado = Math.ceil(co - dummy);
      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      const horas = (resultado * 16.4) / 60;
      console.log(horas);
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    } else if (Double && loyalty) {
      const Exp = (co * Double) / 100;
      const resultadoo = Math.ceil(co - Exp);

      const porcentagemloyalty = Math.ceil((resultadoo * loyalty) / 100);
      const resultado = Math.ceil(resultadoo - porcentagemloyalty);

      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      const horas = (resultado * 16.4) / 60;
      console.log(horas);
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    } else if (loyalty) {
      const porcentagemloyalty = Math.ceil((co * loyalty) / 100);
      const resultado = Math.ceil(co - porcentagemloyalty);
      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    } else if (Double) {
      const Exp = (co * Double) / 100;
      const resultado = Math.ceil(co - Exp);
      const dodo = resultado * valorcoin;
      const dudu = resultado * valordavarinha;
      const horas = (resultado * 16.4) / 60;
      console.log(horas);
      setResults(() => ({
        resultado,
        dodo,
        dudu,
      }));
    }

    const horas = (co * 16.4) / 60;
    console.log(horas);
  };
  let valordavarinha = [];
  let valorcoin = [];
  if (WeaponCharges === "305000") {
    const valor = 262500;
    const coins = 25;
    valordavarinha.push(valor);
    valorcoin.push(coins);
  }

  if (WeaponCharges === "1006500") {
    const valor = 945000;
    const coins = 90;
    valordavarinha.push(valor);
    valorcoin.push(coins);
  }
  if (WeaponCharges === "8052000") {
    const valor = 7560000;
    const coins = 720;
    valordavarinha.push(valor);
    valorcoin.push(coins);
  }

  return (
    <div>
      <Link to='/PartyHuntAnaLyzer'>
        <Button>PartyHuntAnaLyzer</Button>
      </Link>
      <div className='card'>
        <div className='card-text'>
          <div className='title-total'>
            <div className='title'>Calculadora de Magic Level</div>

            <form>
              <div className='field-wrap'>
                <label>CLASSE:</label>
                <select
                  value={classe}
                  name='vocation'
                  onChange={(e) => {
                    const select = e.target.value;
                    Setclasse(select);
                  }}
                >
                  <option value='1.1'>MAGE</option>
                  <option value='3'>KNIGHT</option>
                  <option value='1.4'>PALADINO</option>
                </select>
                <label>VARINHA: </label>
                <select
                  value={WeaponCharges}
                  name='weapon'
                  onChange={(e) => {
                    const weaponselect = e.target.value;
                    SetWeaponCharges(weaponselect);
                  }}
                >
                  <option value='305000'>500</option>
                  <option value='1006500'>1.800</option>
                  <option value='8052000'>14.400</option>
                </select>
                <label>LOYALTY:</label>
                <select
                  value={loyalty}
                  name='weapon'
                  onChange={(e) => {
                    const loyaltyselect = e.target.value;
                    setloyalty(loyaltyselect);
                  }}
                >
                  <option value='0'>DESATIVADO</option>
                  <option value='5'>5% (Bonus)</option>
                  <option value='10'>10% (Bonus)</option>
                  <option value='15'>15% (Bonus)</option>
                  <option value='20'>20% (Bonus)</option>
                  <option value='25'>25% (Bonus)</option>
                  <option value='30'>30% (Bonus)</option>
                  <option value='35'>35% (Bonus)</option>
                  <option value='40'>40% (Bonus)</option>
                  <option value='45'>45% (Bonus)</option>
                  <option value='50'>50% (Bonus)</option>
                </select>
                DUMMY:
                <select
                  value={Dummy}
                  name='double'
                  onChange={(e) => {
                    const DummySelect = e.target.value;
                    SetDummy(DummySelect);
                  }}
                >
                  <option value=''>SEM DUMMY</option>
                  <option value='10'>COM DUMMY</option>
                </select>
                DOUBLEXP
                <select
                  value={Double}
                  name='double'
                  onChange={(e) => {
                    const DoubleSelect = e.target.value;
                    setDouble(DoubleSelect);
                  }}
                >
                  <option value=''>SEM DOUBLE</option>
                  <option value='50'>COM DOUBLE</option>
                </select>
              </div>
            </form>

            <form onSubmit={handleSubmit}>
              <div className='field-wrap'>
                <label>Digite Seu ML</label>
                <input
                  name='inicial'
                  type='number'
                  value={level}
                  onChange={(e) => {
                    setLevel(e.target.value);
                  }}
                />
              </div>
              <div className='field-wrap'>
                <label>Digite ML Desejado</label>
                <input
                  name='desejado'
                  type='number'
                  value={finallvl}
                  onChange={(e) => {
                    finalSetLvl(e.target.value);
                  }}
                />
              </div>
              <button
                disabled={!level || !finallvl}
                variant='outline-success'
                type='submit'
              >
                CALCULAR
              </button>
            </form>
          </div>
          <div className='portada'></div>
        </div>
      </div>
      <div className='card'>
        <div className='cardd'>
          <div className='list'>
            {Results && (
              <p>
                <li>
                  Varinhas necessária para o proximo ml: {Results.resultado}
                </li>
                <br></br>
                <li>Dinheiro necessário em varinhas: {Results.dudu}</li>
                <br></br>
                <li>Total de Tibias Coins Gastos: {Results.dodo}</li>
                <br></br>

                <h4 className='fonn'>
                  Se o Tibia Coin custar mais de 10500 gps, compre do NPC, caso
                  contrário, compre na Loja.
                </h4>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
