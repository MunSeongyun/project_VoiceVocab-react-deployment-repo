import React, { useState } from 'react'
const VocabularyListItemButton = () => {
    const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
    const onClick = () => {
        setMenuIsVisible(true)
    }
    const clickX = () => {
        setMenuIsVisible(false)
    }
    const showScript = () => {

    }
    const deleteVoca = () => {
        
    }
    const renameVoca = () => {

    }
    return (
    menuIsVisible ? 
    <div className='menu'>
        <div onClick={clickX}>x</div>
        <div onClick={showScript}>스크립트 보기</div>
        <div onClick={deleteVoca}>삭제</div>
        <div onClick={renameVoca}>이름 수정</div>
    </div>
    : 
    <>
        <button onClick={onClick}>...</button>
    </>
  )
}

export default VocabularyListItemButton
