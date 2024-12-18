import { useLocation, useNavigate } from 'react-router-dom'
import WordSelectDetail from '../components/WordSelectDetail'
import { useState } from 'react'
import Modal from '../components/Modal'
import '../css/knownWordsSelection.css'
const KnownWordsSelection = () => {
  const [modal, setModal] = useState<boolean>(false)
  /** 음성파일을 업로드 하고 전달받은 단어목록 */
  const {state} = useLocation()
  /** 사용자가 안다고 선택한 단어목록 */
  const [knownWordList, setKnownWordList] = useState<Array<string>>([])
  const navigate = useNavigate()
  /** 사용자가 이미 알고 있는 단어에 추가 */
  const appendToKnownWordList = (word: string) => {
    setKnownWordList(prev=>[...prev,word])
  }
  /** KnownWordList에서 제거 */
  const deleteAtKnownWordList = (word: string) => {
    setKnownWordList(prev=>prev.filter((item)=>item!==word))
  }
  /** 단어장 업로드 */
  const onSave = async () => {
    setModal(true) // 모달 표시
    const wordList:Set<string> = new Set(state.wordList)
    const knownWord:Set<string> = new Set(knownWordList)
    for (const word of knownWord){
        wordList.delete(word)
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/save`,{
      method:'POST',
      credentials:'include',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        script: state.script,
        wordList:[...wordList],
        knownWordList:knownWordList
      })
    })
    if(response.ok){
        navigate('/vocabulary-list')
    }
  }
  return (
    <div>
      <Modal isOpen={modal}/>
      <div className='selectionDescription'><div>다음 중 알고 있는 단어를 골라주세요</div><div className='gray'>알고 있는 단어는 다시는 단어장에 뜨지 않습니다.</div></div>
      
      <div className='words'>
        {state.wordList.map((item :string)=>{
          return <WordSelectDetail key={item} word={item} appendWord={appendToKnownWordList} deleteWord={deleteAtKnownWordList}/>
        })}
      </div>
      
      <div className='buttonContainer'><button onClick={onSave}>단어장 생성하기</button></div>
    </div>
  )
}

export default KnownWordsSelection
