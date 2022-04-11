import './App.css';
import React, { createContext, useState } from 'react';
import Slide from './comps/Slide';
import Draggable from './comps/Draggable';

export const AppContext = createContext();

function App() {
  /**
   * open
   * type
   * return
   * rate
   */
  const [state, setState] = useState("open")
  const [sentence, setSentence] = useState("")
  const [hashtags, setHashtags] = useState([])

  return (
    <AppContext.Provider value={[state, setState, sentence, setSentence, hashtags, setHashtags]}>
      <div className="App">
        <Slide />
        <Draggable />
      </div>
    </AppContext.Provider>
  );
}

export default App;
