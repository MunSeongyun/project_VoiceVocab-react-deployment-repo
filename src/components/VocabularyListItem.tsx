import React from 'react'
import { VocabularyListType } from '../common/types'
import '../css/vocabularyListItem.css'
import VocabularyListItemButton from './VocabularyListItemButton'
import { useNavigate } from 'react-router-dom'
interface VocabularyListProps {
  list: VocabularyListType
}

const VocabularyListItem: React.FC<VocabularyListProps> = ({list}) => {
  const {id, vocabularyName} = list
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/vocabulary/${id}`)
  }

  return (
    <>
      <div className='container' onClick={onClick}>
      {vocabularyName}
      </div>
      <VocabularyListItemButton />
    </>
    
  )
}

export default VocabularyListItem
