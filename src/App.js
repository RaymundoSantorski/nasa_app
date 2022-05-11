import {
    useState,
} from 'react';

import { Caroussel } from './components/Caroussel';

import './styles.css';

export const App = () => {

  const [source, setSource] = useState('apod');

  return (
    <div className="App">
      <Caroussel source={source} />
    </div>
  );
}