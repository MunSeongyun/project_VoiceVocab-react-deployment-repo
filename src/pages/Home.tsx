import React, { FormEvent, useState } from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/LoadingModal'
const Home = () => {
  const navigate = useNavigate()
  const [buttonClicked, setButtonClicked] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)

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

  return (
    <div className='container'>
      <div className='title'>VoiceVocab</div>
      <div className='description'>대화에서 놓친 단어들을 빠르게 정리해보세요!</div>
      <Modal isOpen={modal}/>
      {
        buttonClicked ? 
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
        
        : 
        <div className='item'>
          <button onClick={()=>{setButtonClicked(true)}}>음성파일로 시작하기</button>
          <button onClick={()=>{alert('미구현')}}>채팅내역으로 시작하기</button>
        </div>
      }
      
    </div>
  )
}

export default Home
