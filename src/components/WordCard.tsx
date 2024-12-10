import React, { useState } from 'react';

interface WordDetailProps {
    word: string;
}

const WordDetail: React.FC<WordDetailProps> = ({ word }) => {
    const [front, back] = word.split(',');
    const [isFront, setIsFront] = useState(true);
    if(!front || !back){
      return <></>
    }
    const handleClick = () => {
        setIsFront(!isFront);
    };

    return (
        <div onClick={handleClick} className={`wordCard${isFront}`}>
            {isFront ? `${front}` : `${back}`}
        </div>
    );
};

export default WordDetail;