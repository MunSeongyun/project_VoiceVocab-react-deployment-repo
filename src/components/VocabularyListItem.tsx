import React from 'react'
import { VocabularyListType } from '../common/types'
import '../css/vocabularyListItem.css'


const VocabularyListItem = (list:VocabularyListType):React.ReactElement => {
  const {id, fileUrl, vocabularyName, scriptUrl} = list
  console.log(id, fileUrl, vocabularyName, scriptUrl)
  return (
    <div className='container'>
      {vocabularyName}
    </div>
  )
}

export default VocabularyListItem
