import React from 'react'
import '../css/modal.css'
interface ModalInterfate{
    isOpen:boolean
}
const Modal:React.FC<ModalInterfate> = ({isOpen}) => {

  return (
    isOpen?
    <div className='modal-overlay'>
        <div className='modal'>
        로딩중...
        </div>
    </div>:<></> 
  )
}

export default Modal
