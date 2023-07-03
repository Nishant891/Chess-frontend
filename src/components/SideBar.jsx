import profile from "../UI_Images/profile.svg"
import faq from "../UI_Images/faq.svg"
import marketplace from "../UI_Images/marketplace.svg"

function SideBar (){
    return(
        <div className="text-white bg-[#021325] ">
            <div className="bg-transparent w-full h-full flex flex-col gap-4 justify-start items-center">
                <div className="w-11/12 h-36 rounded-xl outline outline-offset-2 outline-slate-400/25 mt-4">

                </div>
                <div className="w-11/12 h-32 rounded-xl flex flex-col gap-3 justify-evenly mt-4">
                    <div className="flex items-center justify-start">
                        <img className="w-8 h-8" src={profile} alt="profile-icon"></img>
                        <p className="indent-4 cursor-pointer hover:text-[#0054C6]">Profile</p>
                    </div>
                    <div className="flex items-center justify-start">
                        <img className="w-8 h-8" src={marketplace} alt="profile-icon"></img>
                        <p className="indent-4 cursor-pointer hover:text-[#0054C6]">Marketplace</p>
                    </div>
                    <div className="flex items-center justify-start">
                        <img className="w-8 h-8" src={faq} alt="profile-icon"></img>
                        <p className="indent-4 cursor-pointer hover:text-[#0054C6]">FAQs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar