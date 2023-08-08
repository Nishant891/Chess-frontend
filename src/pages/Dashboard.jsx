import SideBar from "../components/SideBar.jsx";
import chessTimer from "../UI_Images/chess-timer.svg";
import chessPuzzle from "../UI_Images/chess-puzzle.svg";
function Dashboard() {
  return (
    <>
      <div className="h-screen width-screen grid grid-cols-4 divide-x divide-slate-400/25">
        <SideBar />
        <div className="col-span-3 bg-[#021325] text-white">
          <div className="w-full h-full bg-transparent flex flex-row justify-evenly items-center">
            <div className="w-2/5 h-3/5 bg-[#002957] rounded-xl outline outline-offset-2 outline-[#0054C6] mt-4 flex flex-col justify-center items-center">
              <div className="flex items-center justify-center">
                <p className="text-4xl">PLAY CHESS</p>
                <img
                  className="w-10 h-10 ml-4 mt-1"
                  src={chessTimer}
                  alt="profile-icon"
                ></img>
              </div>
              <div className="text-center mt-4">
                <button className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xl rounded-lg mb-1">
                  Create a room
                </button>
                <button className="px-4 py-3 bg-gradient-to-r from-[#c7f9cc] to-[#57cc99] text-black text-xl rounded-lg ml-4">
                  Join a room
                </button>
                <div>
                  <input
                    className="px-4 py-2 border border-gray-300 rounded-lg mt-2 w-full outline-none text-black"
                    type="text"
                    placeholder="Enter room ID"
                  />
                </div>
              </div>
            </div>
            <div className="w-2/5 h-3/5 bg-[#002957] rounded-xl outline outline-offset-2 outline-[#0054C6] mt-4 flex flex-col justify-center items-center">
              <div className="flex items-center justify-center">
                <p className="text-4xl">PLAY PUZZLES</p>
                <img
                  className="w-10 h-10 ml-4 mb-2"
                  src={chessPuzzle}
                  alt="profile-icon"
                ></img>
              </div>
              <button className="px-4 py-3 bg-gradient-to-r from-[#c7f9cc] to-[#57cc99] text-black text-xl rounded-lg mt-3">
                Start Puzzle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
