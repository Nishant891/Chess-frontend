import bgImage from "../UI_Images/background.svg"
import Navbar from "../components/Navbar.jsx"

function Home() {
    return (
        <div className="w-screen h-screen relative">
            <Navbar/>
            <div className="w-full h-full relative">
                <img className="w-full h-full object-cover" src={bgImage} alt="background-image"></img>
                <div className="bg-transparent w-full h-full flex items-center justify-center z-30 absolute inset-0 text-white">
                    <div className="flex flex-col items-center ">
                        <h1 className=" font-mono text-7xl">BLOCKCHESS</h1>
                        <p className="text-center text-2xl font-mono">What's better than playing chess and earning?</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
  }
  
export default Home