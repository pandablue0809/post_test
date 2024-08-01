import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import ProfileLink from "./components/ProfileLink";
import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Article from "./components/Article";

export default function Post() {
  const [selectButton, setSelectButton] = useState('post')

  return (
    <>
      <div className="max-w-[800px] w-[90%] m-auto py-16">
        <div className="py-2.5">
          <Link to='/' className="flex flex-row items-center gap-1">
            <HiArrowLeft className="w-6 h-6"/> <span>Back</span>
          </Link>
        </div>
        <div className="text-[32px] font-bold leading-[48px] text-titleColor text-center">
          Manage  post
        </div>
        <div className="py-16">
          <ProfileLink/>
        </div>
        <div className="shadow-lg">
          <button className={`w-[50%] py-2.5 ${selectButton === "setting" ? 'bg-primaryColor text-white' : 'bg-white text-textColor'}`} onClick={() => {setSelectButton('setting')}}>Settings</button>
          <button className={`w-[50%] py-2.5 ${selectButton === "post" ? 'bg-primaryColor text-white' : 'bg-white text-textColor'}`} onClick={() => {setSelectButton('post')}}>
            Posts
            <span className={`rounded-xl px-2 ml-2.5 leading-[12px] ${selectButton === "post" ? 'bg-white text-textColor' : 'bg-primaryColor text-white'}`}>4</span>
          </button>
        </div>
        <div className="py-16">
          <CreatePost/>
        </div>
        <div>
          <Article/>
        </div>
      </div>
    </>
  )
}
