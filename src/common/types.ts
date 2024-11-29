export type WordSelectDetailProps = {
    word:string,
    appendWord:Function,
    deleteWord:Function
}

export type VocabularyListType = {
    id:number,
    user_id:number,
    file_url:string,
    script_url:string,
    vocabulary_name:string
}