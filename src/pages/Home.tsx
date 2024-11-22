import React, { FormEvent, useState } from 'react'
import '../css/home.css'
const Home = () => {
  const [voiceFile, setVoiceFile] = useState<File|null>(null)
  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(voiceFile){
      const formData = new FormData()
      formData.append('file',voiceFile)
      const reaponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/generate`,{
        method:"POST",
        body:formData
      })
      if(reaponse.ok){
        
      }
    } 
  }

  return (
    <div className='container'>
      <h1>VoiceVocab</h1>
      <div>대화에서 놓친 단어들을 빠르게 정리해보세요!</div>
      <form onSubmit={(e)=>onSubmit(e)}>
        <input type="file" onChange={
          (e)=>{setVoiceFile(
            e.target.files ? e.target.files[0] : null
          )}
        }/>
        <button>업로드</button>
      </form>
    </div>
  )
}

export default Home
