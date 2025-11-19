import BackgroundVideo from "./components/BackgroundVideo";
import RocketBlock from "./components/RocketBlock";

import SaltanAndrey from './texts/saltan_andrey.json';
import VorobyovaOlga from './texts/vorobyova_olga.json';
import KuraksinaNatalya from './texts/kuraksina_natalya.json';
import MarkidonovaAnna from './texts/markidonova_anna.json';
import KononchukSemyon from './texts/kononchuk_semyon.json';
import AbramovaTatyana from './texts/abramova_tatyana.json';
import ShadrinAndrey from './texts/shadrin_andrey.json';
import Masha from './texts/sharomova_mariya.json';
import BorodinaLubov from './texts/borodina_lyubov.json';
import NikolaevaOlga from './texts/nikolayea_olga.json';
import SharaevskayaMariya from './texts/sharaevskaya_mariya.json';

function App() {
  return (
      <div style={{ backgroundColor: 'rgb(3, 8, 4)' }}>
          <div className="container-fluid p-0">
              <BackgroundVideo />
              <RocketBlock
                  rocketBlockInfo={SaltanAndrey}
                  isBlockFirst={true}
              />
              <RocketBlock
                  rocketBlockInfo={VorobyovaOlga}
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
                  rocketBlockInfo={AbramovaTatyana}
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
  )
}

export default App
