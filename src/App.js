import {
    useState,
} from 'react';

import { MainMenu } from "./components/menu/MainMenu";
import { Image } from './components/img/Image';

import './styles.css';

export const App = () => {

  const [source, setSource] = useState('apod');

  return (
    <div className="App">
      <MainMenu setSource={setSource} />
      <Image source={source} />
    </div>
  );
}