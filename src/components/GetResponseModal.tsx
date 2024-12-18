import React from 'react'
import '../css/modal.css'
interface ModalInterfate{
    isOpen:boolean,
    text:string,
    setIsOpen:()=>void,
    setAnswer:(answer:boolean)=>void
}
const GetResponseModal:React.FC<ModalInterfate> = ({isOpen, text, setIsOpen, setAnswer}) => {

  return (
    isOpen?
    <div className='modal-overlay' onClick={setIsOpen}>
        <div className='modal'>
          {text}
          <div>
            <button onClick={()=>{
                setAnswer(true)
                setIsOpen
            }}>
                예
            </button>
            <button onClick={()=>{
                setAnswer(false)
                setIsOpen
            }}>
                아니요
            </button>
        </div>
        </div>
    </div>:<></> 
  )
}

export default GetResponseModal
