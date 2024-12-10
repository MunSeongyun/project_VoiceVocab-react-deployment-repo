import { useEffect, useState } from 'react'
import { VocabularyListType } from '../common/types'
import VocabularyListItem from '../components/VocabularyItem'
import '../css/vocabularyList.css'
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
      <div className='listTitle'>단어장 목록</div>
      <div className='vocabularyListContainer'>
        {list.map((item)=><VocabularyListItem key={item.id} list={item}/>)}
      </div>
      
    </div>
  )
}

export default VocabularyList
