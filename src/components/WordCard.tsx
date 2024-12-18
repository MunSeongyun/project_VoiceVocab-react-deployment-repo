import React, { useEffect, useState } from 'react';
import GetResponseModal from './GetResponseModal';
import { useLocation } from 'react-router-dom';

interface WordDetailProps {
    word: string;
    deleteWord: (str:string)=>void
}

const WordDetail: React.FC<WordDetailProps> = ({ word ,deleteWord}) => {
    const [front, back] = word.split(',');
    const {pathname} = useLocation()
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const [isFront, setIsFront] = useState<boolean>(true);
    const [confirm, setConfirm] = useState<boolean>(false);
    if(!front || !back){
      return <></>
    }
    const handleClick = () => {
        setIsFront(!isFront);
    };
    useEffect(()=>{
        async function name() {
            if(confirm){
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vocabulary/known`,{
                    credentials:'include',
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        word:front,
                        content:word,
                        vocabularyId:pathname.replace('/vocabulary-detail/',"")
                    })
                })
                if(response.ok){
                    console.log(word)
                    deleteWord(word)
                }
            }
        }
        name()
    },[confirm])
    const addKnownWord = async () => {
        setIsOpen(true)
    }
    return (
        <>
            <GetResponseModal setAnswer={(res:boolean)=>{setConfirm(res)}} isOpen={isOpen} setIsOpen={()=>{setIsOpen(false)}} text={`${front}를 아는 단어에 추가할까요?`} />
            <div className='wordCard'>
                <div onClick={handleClick} className={`wordCard${isFront}`}>
                    <div className='wordWrapper'>
                        {isFront ? `${front}` : `${back}`}
                    </div>
                    <div className='buttonWrapper'>
                        <button className='wordCardButton'onClick={(e) => { e.stopPropagation(); addKnownWord(); }}>알아요</button>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default WordDetail;