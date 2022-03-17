import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../atoms/text";
import CharacterCount from "./CharacterCount";


function TextInput(){
    const [text, setText] = useRecoilState(textState)

    function onChange(event){
        setText(event.target.value);
    }
    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
            <br/>
            Echo: {text}
        </div>
    )
}

export default function CharacterCounter(){
    return(
        <>
            <TextInput/>
            <CharacterCount/>
        </>
        
    )
}