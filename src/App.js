import React, { useReducer } from 'react';
import './App.css';
import Reestr from './component/reestr';

export const MContext = React.createContext(null)

function App() {

const initialState = {name:['Jopa'], inputValue:''}
const Mreducer = (state,action) => {

  switch (action.type){

    case 'insertInputValue': {
      return {
        ...state,
        inputValue: action.value
      }
    }

    default:
      return state;
  }

}

const [state, dispatch] = useReducer(Mreducer, initialState)

  return (
    <MContext.Provider
    value={{state,dispatch}}
    >
    <div className="App">
    <Reestr />
    </div>
    </MContext.Provider>
  );
}

export default App;
