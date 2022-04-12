import React, {useContext, useEffect, useState} from 'react';
import "./Slide.css"
import App, { AppContext } from '../App';

function Slide() {
    const [state, setState, sentence, setSentence, hashtags, setHashtags] = useContext(AppContext)

    function handleFormValueChange(e) {
        setSentence(e.target.value)
        e.preventDefault()
    }

    function handleCopyToClip(value) {
        navigator.clipboard.writeText("#" + value)
    }

    function handleCopyToClipAll() {
            let str = ""
            for (let i = 0; i < hashtags.length; i++) {
                str += " #" + hashtags[i]
            }
            navigator.clipboard.writeText(str)
            alert("the following hashtags were copied: " + str)
    }

    const Body_Return = () => {
        return <div className='body-return'>
            <h1 className='header-text' onClick={handleCopyToClipAll}> #copyall </h1>
            <div>
                {hashtags.map((h) => {return <button className='hashtag-button' onClick={(e) => handleCopyToClip(h)} >{"#" + h}</button>})}
            </div>
        </div>
    }

    const Body = () => {
        switch (state) {
            case ("open") : return <div> <h1 className='header-text-dead'> HASHTAG GENERATOR </h1> <h1 className='bighash'>#</h1> </div>
            case ("type") : return null
            case ("return") : return <Body_Return />
        }
    }


    return ( <div className="Slide">
        <input className='type-bar' type='text' style={{'opacity': (state == "type" ? 1 : 0)}}
                placeholder="generate hashtags" 
                onChange={(e) => {
                    e.preventDefault()
                    handleFormValueChange(e)}}
                value={sentence} 
                />
        <Body />
    </div> );
}

export default Slide;