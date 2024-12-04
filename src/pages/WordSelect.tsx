import { useLocation, useNavigate } from 'react-router-dom'
import WordSelectDetail from '../components/WordSelectDetail'
import { useState } from 'react'

const WordSelect = () => {
  const {state} = useLocation()
  const [knownWordList, setKnownWordList] = useState<Array<string>>([])
  const navigate = useNavigate()
  const appendToKnownWordList = (word: string) => {
    setKnownWordList(prev=>[...prev,word])
  }
  const deleteAtKnownWordList = (word: string) => {
    setKnownWordList(prev=>prev.filter((item)=>item!==word))
  }
  const onSave = async () => {
    const wordList:Set<string> = new Set(state.wordList)
    const knownWord:Set<string> = new Set(knownWordList)
    for (const word of knownWord){
        wordList.delete(word)
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/save`,{
      method:'POST',
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
      <div>다음 중 알고 있는 단어를 골라주세요</div>
      <div>알고 있는 단어는 다시는 단어장에 뜨지 않습니다.</div>
      {state.wordList.map((item :string)=>{
        return <WordSelectDetail key={item} word={item} appendWord={appendToKnownWordList} deleteWord={deleteAtKnownWordList}/>
      })}
      <button onClick={onSave}>단어장 생성하기</button>
    </div>
  )
}

export default WordSelect
