import React, {useContext, useEffect, useState} from 'react';
import "./Slide.css"
import App, { AppContext } from '../App';

function Slide() {
    const [state, setState, sentence, setSentence, hashtags, setHashtags] = useContext(AppContext)

    useEffect(() => {
        console.log("state change")
        
    }, [])

    function handleFormValueChange(e) {
        setSentence(e.target.value)
        
       
    }

    const Body = () => {
        switch (state) {
            case ("open") : return <div> <h1 className='header-text'> HASHTAG GENERATOR </h1> <h1 className='bighash'>#</h1> </div>
            case ("type") : return <input id='type-bar' className='type-bar' type='text' 
                placeholder="generate hashtags" 
                onChange={handleFormValueChange}
                value={sentence} 
                /> 
            case ("return") : return <h1 className='header-text'> #hashtags </h1>
        }
    }


    return ( <div className="Slide">
        <Body />
        <p>{hashtags}</p>
    </div> );
}

export default Slide;