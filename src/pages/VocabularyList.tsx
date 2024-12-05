import React, { useEffect, useState } from 'react'
import { VocabularyListType } from '../common/types'

const VocabularyList = () => {
  const [list,setList] = useState<VocabularyListType[]>([])

  useEffect(()=>{
    async function voca() {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/list`,{
        credentials:'include'
      })
      if(response.ok){
        const data = await response.json()
        setList(data.data)
      }
    }
    voca()
  },[])
  return (
    <div>
      {list.map((item)=>{
        return (
          <div>
            id: {item.id} <br/>
            userId: {item.userId} <br/>
            fileUrl: {item.fileUrl} <br/>
            scriptUrl: {item.scriptUrl} <br/>
            vocabularyName: {item.vocabularyName} <br/>
          </div>
        )
      })}
    </div>
  )
}

export default VocabularyList
