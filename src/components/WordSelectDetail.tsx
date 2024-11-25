import React, { useState } from 'react'
import { WordSelectDetailProps } from '../common/types'

const WordSelectDetail:React.FC<WordSelectDetailProps> = ({word, appendWord, deleteWord}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const onClick = () => {
        if(isSelected){
            setIsSelected(false)
            deleteWord(word)
        }else{
            setIsSelected(true)
            appendWord(word)
        }
    }
  return (
    <div onClick={onClick}>
      {word}
      {isSelected ? <div style={{
        color:'red'
      }}>체크됨</div> : <div style={{
        color:'gray'
      }}>체크안됨</div>}
    </div>
  )
}

export default WordSelectDetail
