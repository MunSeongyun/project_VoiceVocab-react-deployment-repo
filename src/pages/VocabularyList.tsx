import React, { useEffect, useState } from 'react'
import { VocabularyListType } from '../common/types'
import VocabularyListItem from '../components/VocabularyListItem'

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
      <div>단어장 목록</div>
      {list.map((item)=><VocabularyListItem key={item.id} {...item}/>)}
    </div>
  )
}

export default VocabularyList
