import { useEffect, useState } from 'react'
import { VocabularyListType } from '../common/types'
import VocabularyListItem from '../components/VocabularyItem'
import '../css/vocabularyList.css'
import { useNavigate } from 'react-router-dom'
const VocabularyList = () => {
  const [list,setList] = useState<VocabularyListType[]>([])
  const navigate = useNavigate()
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
  const onClick = () => {
    navigate('/vocabulary-detail/known')
  }
  return (
    <div>
      <div className='listTitle'>단어장 목록</div>
      <div className='vocabularyListContainer'>
        {list.map((item)=><VocabularyListItem key={item.id} list={item}/>)}
      </div>
      <div className='vocabularyListItem' onClick={onClick}>
      <span>알고 있는 단어 목록</span>
      </div>
      
    </div>
  )
}

export default VocabularyList
