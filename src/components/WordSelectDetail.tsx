import React, { useState } from 'react'

interface WordSelectDetailProps {
  word:string,
  appendWord:Function,
  deleteWord:Function
}

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
    <div onClick={onClick} className={`wordItem${isSelected}`}>
      <span className='word'>{word}</span>
    </div>
  )
}

export default WordSelectDetail
