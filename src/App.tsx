import React from 'react';

import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import RocketBlock from './components/RocketBlock';
import { Row, Col, Container } from 'react-bootstrap';

import SaltanAndrey from './texts/saltan_andrey.json';
import SaltanElena from './texts/saltan_elena.json';
import KuraksinaNatalya from './texts/kuraksina_natalya.json';
import MarkidonovaAnna from './texts/markidonova_anna.json';
import KononchukSemyon from './texts/kononchuk_semyon.json';
import Example1 from './texts/example1.json';
import ShadrinAndrey from './texts/shadrin_andrey.json';
import Masha from './texts/masha.json';
import BorodinaLubov from './texts/borodina_lyubov.json';
import NikolaevaOlga from './texts/nikolayea_olga.json';
import SharaevskayaMariya from './texts/sharaevskaya_mariya.json';


function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <BackgroundVideo />
        {/*Блок с описанием "проекта"*/}
        <RocketBlock
          rocketBlockInfo={SaltanAndrey}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={SaltanElena}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={KuraksinaNatalya}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={MarkidonovaAnna}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={KononchukSemyon}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={Example1}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={ShadrinAndrey}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={Masha}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={BorodinaLubov}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={NikolaevaOlga}
          isBlockFirst={true}
        />
        <RocketBlock
          rocketBlockInfo={SharaevskayaMariya}
          isBlockFirst={true}
        />
      </div>
    </div>
  );
}

export default App;
