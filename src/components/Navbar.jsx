import logo from "../UI_Images/checkmate.png"

function Navbar() {
    return (
        <>
            <div className="bg-white w-4/5 h-14 z-40 fixed top-3 translate-x-28 ml-4 rounded-2xl flex flex-row justify-between">
                <div className="h-full w-20 flex items-center justify-center">
                    <img className="h-10" src={logo} alt="logo"></img>
                </div>
                <div className="w-2/4 h-full flex flex-row justify-evenly items-center">
                    <p className="cursor-pointer hover:text-[#0054C6]">Home</p>
                    <p className="cursor-pointer hover:text-[#0054C6]">Marketplace</p>
                    <p className="cursor-pointer hover:text-[#0054C6]">Features</p>
                    <p className="cursor-pointer hover:text-[#0054C6]">About us</p>
                    <p className="cursor-pointer hover:text-[#0054C6]">Contact</p>
                </div>
            </div>
        </>
    )
  }
  
  export default Navbar