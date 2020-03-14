import React, { useContext } from 'react'
import {MContext} from '../App'


const Reestr = props => {

  const {state,dispatch} = useContext(MContext)
  return (
    <div className='container'>
      <input onChange={e=> dispatch({type:'insertInputValue',value:e.target.value})} placeholder='Введите ФИО заемщика' value={state.inputValue}/>

       
  
    </div>
  )
}



export default Reestr
