import { Link } from "react-router-dom"

export default function Home() {
    return (
      <>
        <div className="flex flex-row justify-center items-center bg-bgColor h-lvh w-full">
            <Link to="/post" className="bg-[radial-gradient(50%_115.18%_at_50%_-15.18%,#8F00FF_0%,#532BC5_100%)] py-2 px-3 rounded-md text-white">
                Go to Post page 
            </Link>
       </div>
      </>
    )
  } 
