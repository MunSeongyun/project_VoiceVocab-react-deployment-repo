import React, { useEffect, useState } from 'react'
import { VocabularyListType } from '../common/types'

const VocabularyList = () => {
  const [list,setList] = useState<VocabularyListType[]>([])

  useEffect(()=>{
    async function voca() {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/list/1`)
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
            user_id: {item.user_id} <br/>
            file_url: {item.file_url} <br/>
            script_url: {item.script_url} <br/>
            vocabulary_name: {item.vocabulary_name} <br/>
          </div>
        )
      })}
    </div>
  )
}

export default VocabularyList
