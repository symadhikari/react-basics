import { useState, useContext } from 'react'
import {AppContext} from '../App' 
import './Home.css'
function Home(props){
    const { userName } = useContext(AppContext);
    let [num, setNum] = useState(0);
    let incNum =()=>{
        setNum(Number(num)+1);
    }

    let [mode, setMode] = useState('Light Mode');
    let changeMode =()=>{
        if(mode == 'Dark Mode'){
            setMode('Light Mode');
            console.log('Dark Mode Activated');
            document.body.style.background = "black";
            document.body.style.color = "white";
        }
        else{
            setMode('Dark Mode');
            console.log('Light Mode Activated');
            document.body.style.background = "white";
            document.body.style.color = "black";
        }
    }

    let handleInput =(event)=>{
        console.log(event.target.value);
    }

    return (
        <>
            <h1>Hello {userName}</h1>
            <p>Click on the button below</p>
            <button className='btnClick' onClick={incNum}>Click Here</button>
            <button onClick={changeMode}>Click Here to turn on {mode}</button>
            <span>{num}</span>

            <input type='text' onChange={handleInput}/>
        </>
    )
}

export default Home;