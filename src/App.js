import React, { useReducer, useEffect } from 'react';
import './App.css';
import Reestr from './component/reestr';

export const MContext = React.createContext(null)

function App() {

 



const initialState = {array:[{name:'Jopa', id:0}], inputValue:''}













const Mreducer = (state,action) => {



 






  switch (action.type){

    case 'insertInputValue': {
      return {
        ...state,
        inputValue: action.value
      }
    }
    case 'addName': {

      let value = {
        name: state.inputValue,
        id : Date.now()

      }
      return {
        ...state,
        array: [...state.array, value],
        inputValue : ''
      }
    }
    
    case 'deleteName': {
      let newarray = state.array.filter(el=> el.id!=action.value)
      console.log(newarray)
      return {
        ...state,
        array: [...newarray]
      }
    }
    case 'setState': {
      
      return {
        ...state,
        array: [...action.value]
      }
    }
    default:
      return state;
  }

}

const [state, dispatch] = useReducer(Mreducer, initialState)


useEffect(()=> {

  const raw = localStorage.getItem('array')
  console.log(JSON.parse(raw))
  dispatch({type:'setState', value:JSON.parse(raw)})
},[])




 useEffect(()=> {
  console.log(state.array)
localStorage.setItem('array',JSON.stringify(state.array))
},[state.array]
)









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
