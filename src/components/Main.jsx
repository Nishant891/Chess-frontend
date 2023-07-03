import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import bgImage from "../UI_Images/background.svg"
import flow from "../UI_Images/flow-logo.svg"
import logo from "../UI_Images/kings.png"
import arrow from "../UI_Images/arrow.svg"

function Main(){
    const [user,setUser] = useState(false)
    const myStyles = {
        height: '80vh'
    }
    const navigate = useNavigate();
    return(
            <div className="w-full relative" style={myStyles}>
                <img className="w-screen h-full object-cover" src={bgImage} alt="background-image"></img>
                <div className="bg-transparent w-full h-full flex justify-center z-10 absolute inset-0 text-white mt-24">
                    <div className="flex flex-col items-center mt-6">
                        <img className="w-18 h-24" src={logo} alt="logo"></img>
                        <h1 className="font-mono text-6xl mt-1">CHECKMATE</h1>
                        <p className="text-center text-xl font-mono mt-2">The Future of Chess is here, powered by <img className="w-10 h-10 inline" src={flow}></img></p>
                        {user === false ?   
                            <div className="mt-5">
                                <button className="px-4 py-3 bg-[#00EF8B] hover:bg-gradient-to-r from-green-300 to-blue-800 active:opacity-80 text-black text-xl rounded-lg mb-4" onClick={()=>{navigate('/dashboard')}}>Connect Wallet
                                    <img className="h-5 inline mb-1 ml-1" src={arrow}></img>
                                </button>
                            </div>
                            :
                            <div className="text-center mt-4">
                                <button className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xl rounded-lg mb-1" >Create a room</button>
                                <button className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xl rounded-lg ml-4" >Join a room</button>        
                                <div>
                                    <input className="px-4 py-2 border border-gray-300 rounded-lg mt-2 w-full outline-none text-black" type="text"  placeholder="Enter room ID" />
                                </div>
                            </div>    
                        }
                    </div>   
                </div>
            </div>
    )
}

export default Main