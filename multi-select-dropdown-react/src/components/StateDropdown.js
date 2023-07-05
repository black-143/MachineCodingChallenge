import { useEffect, useRef, useState } from 'react'
import './StateDropdown.css'
import { states } from './States'
const StateDropdown=()=>{

    const [selectedStates,setSelectedStates]=useState(
        states.reduce((obj,state)=>({...obj,[state.abbreviation]:false}),{})
    );
    
    const numberOfStatesSelected = Object.values(selectedStates).filter(Boolean).length

    const dropdownRef=useRef(null)

    useEffect(()=>{
        const onClick=(e)=>{
            if(e.target !== dropdownRef.current){
                setIsDropDownDisplayed(false)
            }
        }
        document.addEventListener('click',onClick)
        return ()=>{
            document.removeEventListener('click',onClick)
        }
    },[])

    console.log("selected states")
    const [isDropDownDisplayed,setIsDropDownDisplayed]=useState(false)
    return(
        <fieldset className='state-dropdown'>
        <button 
        onClick={(e)=>{
            e.stopPropagation()
            setIsDropDownDisplayed(prevState=>!prevState)}}>
            {numberOfStatesSelected > 0 ?`${numberOfStatesSelected} selected`:'--Select your States'}
        </button>
        {isDropDownDisplayed && <div onClick={(e)=>e.stopPropagation()}
        ref={dropdownRef} className='panel'>HELLO</div>}
        {states.map((state)=>
        <fieldset key={state.abbreviation}>
         <input
         onChange={(e)=>setSelectedStates({
            [state.abbreviation]: e.target.checked
         })
        }
        checked={selectedStates[state.abbreviation]}

         id={`input ${state.abbreviation}`} 
         type="checkbox"/>
         <label htmlFor={`input-${state.abbreviation}`}>{state.name}</label>
         </fieldset >
         )}
        </fieldset>
    )
}
export default StateDropdown;