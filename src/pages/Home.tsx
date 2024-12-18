import React, { FormEvent, useRef, useState } from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
const Home = () => {
  const navigate = useNavigate()
  const [buttonClickedWav, setButtonClickedWav] = useState<boolean>(false)
  const [buttonClickedText, setButtonClickedText] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  /** 음성파일을 제출하는 함수 */
  const onSubmit = async (e:File) => {
    setModal(true) // 로딩중 모달 표시

    const formData = new FormData()
    formData.append('file',e)
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/generate`,{
      method:"POST",
      body:formData,
      credentials:'include'
    })
    if(response.ok){
      const responseData = await response.json()
      navigate('/filter-known-word',{state:responseData})
    }

  }

  const onSubmitText = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/generate_to_text`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify({
        text:inputRef.current?.value
      })
    })
    if(response.ok){
      const responseData = await response.json()
      navigate('/filter-known-word',{state:responseData})
    }
  }
    

  return (
    <div className='container'>
      <div className='title'>VoiceVocab</div>
      <div className='description'>대화에서 놓친 단어들을 빠르게 정리해보세요!</div>
      <Modal isOpen={modal}/>
      {
        buttonClickedWav ? 
        <>
          <div className='smallContainer'>
            <label htmlFor="wavInput">
              <span className='inLabel'>파일 선택</span>
              <input id='wavInput' type="file" accept='.wav' onChange={
                (e)=>{
                  if(e.target.files){
                    onSubmit(e.target.files[0])
                  } 
                }
              }/>
            </label>
          </div>
          <div>파일은 wav형식이여야 하고, 480mb이하여야 합니다.</div>
        </>
        
        : buttonClickedText ?
          <div className='smallContainer'>
            <input type="text" id='inputText' ref={inputRef}/>
            <button onClick={onSubmitText}>업로드</button>
          </div>
        : 
        <div className='item'>
          <button onClick={()=>{setButtonClickedWav(true)}}>음성파일로 시작하기</button>
          <button onClick={()=>{setButtonClickedText(true)}}>텍스트로 시작하기</button>
        </div>
      }
      
    </div>
  )
}

export default Home
