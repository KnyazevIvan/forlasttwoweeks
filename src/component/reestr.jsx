import React, { useContext, useEffect } from 'react'
import { MContext } from '../App'


const Reestr = props => {




  const { state, dispatch } = useContext(MContext)

  let addName = e => {
    if (e.key === 'Enter') {
      console.log('hi')
      dispatch({ type: 'addName' })
    }
  }




  let newarry = state.array.map(el =>
    <div className='block' >
      <div><span> {el.name} </span> </div>
      <div onClick={() => dispatch({ type: 'setScoring', id: el.id })} className={`scoring${el.toggle ? '-active' : ''}`}  >{el.scoring}
        <div onClick={() => dispatch({ type: 'changeScoring', value: el.fps, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.fps} </div>
        <div onClick={() => dispatch({ type: 'changeScoring', value: el.qcc, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.qcc} </div>
        <div onClick={() => dispatch({ type: 'changeScoring', value: el.ki, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.ki} </div>
        <div onClick={() => dispatch({ type: 'changeScoring', value: el.ok, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.ok} </div>
      </div>

      <div onClick={() => dispatch({ type: 'setProgram', id: el.id })} className={`program${el.toggle2 ? '-active' : ''}`}  >{el.program}

        <div onClick={() => dispatch({ type: 'changeProgram', value: el.refinance, id: el.id })} className={`unscoring${el.toggle2 ? '-active' : ''}`}> {el.refinance} </div>
        <div onClick={() => dispatch({ type: 'changeProgram', value: el.ok2, id: el.id })} className={`unscoring${el.toggle2 ? '-active' : ''}`}> {el.ok2} </div>
      </div>

      <div></div>
      <div>
       
        
            <input type="checkbox" class="filled-in" checked={el.checkedki} />
            <span onClick={()=>dispatch({type:'changeCheckedKI',id:el.id})} >КИ</span>
            <input type="checkbox"   class="filled-in" checked={el.checkedFSSP} />
            <span onClick={()=>dispatch({type:'changeCheckedFSSP',id:el.id})}>ФССП</span>
            <input type="checkbox"   class="filled-in" checked={el.checkedDM} />
            <span onClick={()=>dispatch({type:'changeCheckedDM',id:el.id})}>DM</span>
         
     
      </div>
      <div> <i onClick={() => dispatch({ type: 'deleteName', value: el.id })} className="material-icons">delete</i>
      </div>

    </div>)
  console.log(state)
  return (
    <div className='container'>
      <input onKeyPress={addName} onChange={e => dispatch({ type: 'insertInputValue', value: e.target.value })} placeholder='Введите ФИО заемщика' value={state.inputValue} />

      {newarry}

    </div>
  )
}



export default Reestr
