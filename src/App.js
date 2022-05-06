import {
    useState,
} from 'react';

import { MainMenu } from "./components/menu/MainMenu";

import './styles.css';

export const App = () => {

  const [source, setSource] = useState();

  return (
    <div className="App">
      <MainMenu setSource={setSource} />
      <p>{ source }</p>
    </div>
  );
}