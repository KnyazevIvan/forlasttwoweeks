import React, { useReducer, useEffect } from 'react';
import './App.css';
import Reestr from './component/reestr';

export const MContext = React.createContext(null)

function App() {

 



const initialState = {array:[{name:'', toggle:false, id:0,scoring:'Скоринг', fps:'FPS',ok: 'Всё OK',qcc:'QCC2',ki:'Нет КИ', toggle2:false, ok2:'Все ОК',refinance:'Рефинанс', program:'Программа'}], inputValue:'', checkedki:false, checkedFSSP:false, checkedDM:false}













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
        id : Date.now(),
        scoring: 'Скоринг',
        fps:'FPS',
        qcc: 'QCC2',
        ok: 'Всё ОК',
        toggle: false,
        toggle:false,
        ki: 'Нет КИ',
        program:'Программа',
        refinance:'Рефинанс',
        ok2:'Все ОК',
        checkedki:false,
        checkedFSSP:false,
        checkedDM: false,
        checkedPP: false,
        checkedNDFL: false,
        checkedTK: false

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
    case 'setScoring': {

      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el,toggle:!el.toggle, toggle2:false}
          }
          return {...el, toggle:false, toggle2:false}
        })
      }
  
    }
    case 'changeScoring': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, scoring:action.value}
          }
          return el
        })
      }
  
    }
    case 'setProgram': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el,toggle2:!el.toggle2, toggle:false}
          }
          return {...el, toggle:false, toggle2:false}
        })
      }
    }
    case 'changeProgram': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, program:action.value}
          }
          return el
        })
      }
  
    }
    case 'changeCheckedKI': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, checkedki:!el.checkedki}
          }
          return el
        })
      }
    }
    case 'changeCheckedFSSP': {
      console.log('hi')
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, checkedFSSP:!el.checkedFSSP}
          }
          return el
        })
      }
    }
    case 'changeCheckedDM': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, checkedDM:!el.checkedDM}
          }
          return el
        })
      }
    }
    case 'changeCheckedPP': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, checkedPP:!el.checkedPP}
          }
          return el
        })
      }
    }
    case 'changeCheckedNDFL': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, checkedNDFL:!el.checkedNDFL}
          }
          return el
        })
      }
    }
    case 'changeCheckedTK': {
      return {
        ...state,
        array: state.array.map(el=>{
          if (el.id===action.id)
          {
            return {...el, checkedTK:!el.checkedTK}
          }
          return el
        })
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
