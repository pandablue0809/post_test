import React, { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import the editor's CSS
import { FaCheck } from "react-icons/fa";
import MyEditer from './Editer';

export default function CreatePost() {

    return (
        <div>
            <input type="text" className='bg-white border rounded-md border-[#00000033] w-full py-2.5 px-4 mb-6' placeholder='Input post title'/>
            <MyEditer />           
            <button className='flex felx-row justify-center gap-2 items-center w-[50%] py-3.5 mt-6 rounded-md bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)] text-white'>
                <FaCheck className='w-[24px] h-[24px]'/><span className='text-base font-[600]'>Post</span>
            </button>
        </div>
    );
}
