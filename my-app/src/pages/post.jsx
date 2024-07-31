import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <>
      <div className="max-w-[800px] m-auto py-16">
        <div className="py-2.5">
          <Link to='/' className="flex flex-row items-center gap-1">
            <HiArrowLeft className="w-6 h-6"/> <span>Back</span>
          </Link>
        </div>
        <div className="text-[32px] font-bold leading-[48px] text-titleColor text-center">
          Manage  post
        </div>
      </div>
    </>
  )
}
