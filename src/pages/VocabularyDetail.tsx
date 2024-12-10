import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WordDetail from '../components/WordCard'
import '../css/vocabularyDetail.css'
const VocabularyDetail = () => {
    const {id} = useParams()
    const [voca, setVoca]= useState<Array<string>>([])
    useEffect(()=>{
        if(!id){
            return alert('잘못된 접근입니다.')
        }
        async function effect(id:string) {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/voca/${id}`,{
                method:'GET',
                credentials:'include'
            })
            if(response.ok){
                const data = await response.json()
                setVoca(data.data.split('\n'))
            }
        }
        effect(id)
    },[])
  return (
    <>
      <div></div>
      <div className='vocabularyDetail'>
        {voca.map(item=>{
          return <WordDetail word={item} />
        })}
      </div>
    </>
    
  )
}

export default VocabularyDetail
