import React, { FormEvent, useState } from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
const Home = () => {
  const navigate = useNavigate()
  const [isFile, setIsFile] = useState<boolean>(false)
  const [voiceFile, setVoiceFile] = useState<File|null>(null)
  const [modal, setModal] = useState<boolean>(false)
  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setModal(true)
    if(voiceFile){
      const formData = new FormData()
      formData.append('file',voiceFile)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/generate`,{
        method:"POST",
        body:formData,
        credentials:'include'
      })
      if(response.ok){
        const responseData = await response.json()
        navigate('/select',{state:responseData})
      }
    } 
  }

  return (
    <div className='container'>
      <h1>VoiceVocab</h1>
      <div>대화에서 놓친 단어들을 빠르게 정리해보세요!</div>
      <Modal isOpen={modal}/>
      {isFile ? <form onSubmit={(e)=>onSubmit(e)}>
        <div>파일은 wav형식이여야 하고, 480mb이하여야 합니다.</div>
        <input type="file" accept='.wav' onChange={
          (e)=>{setVoiceFile(
            e.target.files ? e.target.files[0] : null
          )}
        }/>
        <button>업로드</button>
      </form> : <div><button onClick={()=>{setIsFile(true)}}>음성파일로 시작하기</button><button onClick={()=>{alert('미구현')}}>채팅내역으로 시작하기  </button></div>}
      
    </div>
  )
}

export default Home
