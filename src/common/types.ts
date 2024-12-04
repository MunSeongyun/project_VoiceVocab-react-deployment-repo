export type WordSelectDetailProps = {
    word:string,
    appendWord:Function,
    deleteWord:Function
}

export type VocabularyListType = {
    id:number,
    userId:number,
    fileUrl:string,
    scriptUrl:string,
    vocabularyName:string
}