import { useState, useContext } from 'react';
import { AppContext } from '../App';
import logo from '../logo.png'
import './LoginStyle.css'

function Login (props){
    const {setUserName} = useContext(AppContext);
    const [newName, setNewName] = useState("");
    return (
        <div className='container1'>
            <div className="card2" style={{display: 'flex', flexDirection: 'column'}}>
                <img src={logo} />
                <label>Enter Your Mobile Number</label>
                <input placeholder='Enter Your Mobile Number' onChange={(event)=>{setNewName(event.target.value)}}/>
                <label>Enter Your Password</label>
                <input placeholder='Enter Your Password'/>
                <button className='loginbtn' onClick={()=>{setUserName(newName)}}>Login</button>
            </div>
        </div>

    );
}

export default Login;