import React from 'react'
import { VocabularyListType } from '../common/types'
import { useNavigate } from 'react-router-dom'
interface VocabularyListProps {
  list: VocabularyListType
}

const VocabularyListItem: React.FC<VocabularyListProps> = ({list}) => {
  const {id, vocabularyName} = list
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/vocabulary-detail/${id}`)
  }

  return (
    <>
      <div className='vocabularyListItem' onClick={onClick}>
      <span>{vocabularyName}</span>
      </div>
    </>
    
  )
}

export default VocabularyListItem
