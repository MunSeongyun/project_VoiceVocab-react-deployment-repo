import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WordDetail from '../components/WordCard'
import '../css/vocabularyDetail.css'
import Modal from '../components/Modal'
type KnownWord = {
  id : number
  userId : number
  word : string
}
const VocabularyDetail = () => {
    const {id} = useParams()
    const [modal, setModal] = useState<boolean>(false)
    const [script, setScript] = useState<string>('')
    const [voca, setVoca]= useState<Array<string>>([])
    const deleteWord = (word:string) => {
      setVoca(voca.filter(item=>item!==word))
    }
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
        async function effectKnown() {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/known-list`,{
            method:'GET',
            credentials:'include'
          })
          if(response.ok){
            const data = await response.json()
            
            setVoca(data.data.map((item:KnownWord)=>item.word))
          }
        }
        if(id === 'known'){
          effectKnown()
        }else{
          effect(id)
        }
        
    },[])
    const onclick = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/script/${id}`,{
        credentials:'include'
      })
      if(response.ok){
        const data = await response.json()
        setScript(data.data)
        setModal(true)
      }
    }
    
  return (
    <>
      <Modal isOpen={modal} setIsOpen={()=>{setModal(false)}} text={script} />
      <div><button onClick={onclick}>스크립트 보기</button></div>
      <div className='vocabularyDetail'>
        {voca.map(item=>{
          return <WordDetail key={item} deleteWord={deleteWord} word={item} />
        })}
      </div>
    </>
    
  )
}

export default VocabularyDetail
