import React, { useContext, useEffect } from 'react'
import {MContext} from '../App'


const Reestr = props => {




  const {state,dispatch} = useContext(MContext)

 let addName = e => {
   if (e.key ==='Enter')
   {
     console.log('hi')
   dispatch({type:'addName'})
 }}




  let newarry = state.array.map(el=> <div> {el.name} <a onClick={()=> dispatch({type:'deleteName',value:el.id})} class="waves-effect waves-light btn">удалить</a>  </div>)
  return (
    <div className='container'>
      <input onKeyPress={addName} onChange={e=> dispatch({type:'insertInputValue',value:e.target.value})} placeholder='Введите ФИО заемщика' value={state.inputValue}/>

       {newarry}
  
    </div>
  )
}



export default Reestr
