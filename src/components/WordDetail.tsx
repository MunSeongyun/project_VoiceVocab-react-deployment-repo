import React from 'react'

interface WordDetail{
    word:string
}
const WordDetail:React.FC<WordDetail> = ({word}) => {
    const [front, back] = word.split(',')
  return (
    <div>
      
        front:{front}
        back:{back}
      
    </div>
  )
}

export default WordDetail
