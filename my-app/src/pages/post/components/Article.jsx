import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import the editor's CSS
import { FaCheck } from "react-icons/fa";
import img1 from '../../../assets/img/1.png';
import audio from '../../../assets/img/kenji.m4a'
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";


const TEST_ARTICLE = [
  {
    title: "Nunc eu quam sit amet justo elementum mollis",
    content: "<p><b>Nunc eu quam sit amet justo elementum mollis</b></p><p>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis.</p><p></p><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.</p>",
    img: [img1],
    video: [],
    audio:[],
    date: "May 3, 2022 16:22"
  },
  {
    title: "Orci varius natoque penatibus et magnis",
    content: "<p><b>Nunc eu quam sit amet justo elementum mollis</b></p><p></p><p>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. </p><p></p><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. </p>",
    img: [img1,img1,img1,img1],
    video: [],
    audio:[],
    date: "May 3, 2022 16:22"
  },
  {
    title: "Proin laoreet semper",
    content: "<p><b>Proin laoreet semper</b></p><p></p><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. </p>",
    img: [],
    video: [],
    audio:[audio],
    date: "May 3, 2022 16:22"
  },
  {
    title: "Proin laoreet semper tortor ac posuere",
    content: "<p>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis.</p><p></p><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.</p>",
    img: [],
    video: [],
    audio:[],
    date: "May 3, 2022 16:22"
  }
]

export default function Article() {
  const [edit, setEdit] = useState(0)
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [htmlContent, setHtmlContent] = useState('');

    // Handle editor state change
    const handleEditorChange = (state) => {
        console.log(state)
        setEditorState(state);
        setHtmlContent(draftToHtml(convertToRaw(state.getCurrentContent())));
    };
    return (
      <>
        <div>
          {
            TEST_ARTICLE.map((item, key) => {
              return(
                key === edit ? (
                    <div className='bg-white rounded-xl p-6 mb-[56px]'>
                      <div className='text-base font-bold leading-[24px]'>Edit Post</div>
                      <div className='py-6'>
                      <input type="text" className='bg-white border rounded-md border-[#00000033] w-full py-2.5 px-4 mb-6' defaultValue={item.title}/>
                      </div>
                      <div>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={handleEditorChange}
                            toolbar={{
                                options: ['inline', 'list', 'textAlign', 'link','image'],
                            }}
                        />
                      </div>
                      <div className='flex flex-row justify-between'>
                        <button className='flex felx-row justify-center gap-2 items-center w-[50%] py-3.5 mt-6 rounded-md bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)] text-white'>
                            <FaCheck className='w-[24px] h-[24px]'/><span className='text-base font-[600]'>Save</span>
                        </button>
                        <button className='flex felx-row justify-end mr-4 gap-2 items-center w-[110px] py-3.5 mt-6 rounded-md text-textColor'>
                        <MdClose className='w-[24px] h-[24px]'/>Cancle
                        </button>
                      </div>
                    </div>
                  ):(                  
                  <div className='mb-[56px]'>
                  <div className='relative flex flex-row justify-between items-center mb-[21px]'>
                    <div className='absolute -z-[1] block w-full h-[2px] bg-[#0000001A]'></div>
                    <span className='font-bold text-base leading-[24px] text-white rounded-2xl bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)] py-1 px-4'>{item?.title}</span>
                    <div className='flex flex-row gap-2 items-center'>
                      <button className='flex flex-row items-center gap-1 bg-[#C4C4C4] rounded-2xl hover:bg-primaryColor px-4 py-1 text-white' onClick={() => {setEdit(key)}}><MdEdit className='w-[16px] h-[16px]'/><span>Edit</span></button>
                      <button className='bg-[#C4C4C4] rounded-full hover:bg-[#FF002E] p-2 text-white'><RiDeleteBin4Line/></button>
                    </div>
                  </div>
                  <div className='mb-6'>
                    {item.content}
                  </div>
                  <div className='text-[#818181]'>
                    {item.date}
                  </div>
                </div>                 
                  ) 
              )
            })
          }
        </div>
      </>
    )
  }
