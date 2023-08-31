import profile from "../UI_Images/profile.svg";
import faq from "../UI_Images/faq.svg";
import marketplace from "../UI_Images/marketplace.svg";

function SideBar() {
  const SidebarItems = ({ item, image }) => {
    return (
      <div className="flex items-center justify-start">
        <img className="w-8 h-8" src={image} alt="profile-icon"></img>
        <p className="indent-4 cursor-pointer hover:text-[#0054C6]">{item}</p>
      </div>
    );
  };

  return (
    <div className="text-white bg-[#021325] ">
      <div className="bg-transparent w-full h-full flex flex-col gap-4 justify-start items-center">
        <div className="w-11/12 h-1/5 rounded-xl flex flex-col gap-3 justify-evenly mt-4">
          {[
            ["Profile", profile],
            ["Marketplace", marketplace],
            ["FAQs", faq],
          ].map((item, index) => (
            <SidebarItems
              key={item[0] + index}
              item={item[0]}
              image={item[1]}
            />
          ))}
        </div>
        <div className="w-11/12 h-4/5 mb-4 rounded-xl outline outline-offset-2 outline-slate-400/25 mt-4">
          <div className="border-b-2 border-slate-400/25 h-10 flex justify-center items-center">
            <p>ROOMS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
