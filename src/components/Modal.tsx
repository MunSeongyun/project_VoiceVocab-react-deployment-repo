import React from 'react'
import '../css/modal.css'
interface ModalInterfate{
    isOpen:boolean,
    text?:string,
    setIsOpen?:()=>void
}
const Modal:React.FC<ModalInterfate> = ({isOpen, text, setIsOpen}) => {

  return (
    isOpen?
    <div className='modal-overlay' onClick={setIsOpen}>
        <div className='modal'>
          {text?text:'로딩중...'}
        </div>
    </div>:<></> 
  )
}

export default Modal
