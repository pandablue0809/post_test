import { useState } from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs'; // Need to install this library
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FaCheck } from "react-icons/fa";
import img1 from '../../../assets/img/1.png';
import img2 from '../../../assets/img/2.png';
import img3 from '../../../assets/img/3.png';
import img4 from '../../../assets/img/4.png';
import img5 from '../../../assets/img/5.png';
import audio from '../../../assets/img/kenji.mp3';
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdEdit, MdClose } from "react-icons/md";

const htmlToEditorState = (html) => {
  const contentBlock = htmlToDraft(html);
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks, contentBlock.entityMap);
  return EditorState.createWithContent(contentState);
};

const TEST_ARTICLE = [
  {
    title: "Nunc eu quam sit amet justo elementum mollis",
    content: `
      <div class='px-6'>
        <p class='pb-2.5'><b>Nunc eu quam sit amet justo elementum mollis</b></p>
        <p class='pb-2.5'>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis.</p>
        <p class='pb-2.5'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.</p>
        <div class='py-6'>
          <img src='${img1}' alt='' class='w-[512px]'/>
        </div>
      </div>
    `,
    date: "May 3, 2022 16:22"
  },
  {
    title: "Orci varius natoque penatibus et magnis",
    content: `
      <div class='px-6'>
        <p class='pb-2.5'><b>Nunc eu quam sit amet justo elementum mollis</b></p>
        <p class='pb-2.5'>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis.</p>
        <p class='pb-2.5'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.</p>
        <div class='flex flex-row justify-between gap-[24px] py-6'>
          <div class='grid grid-1 gap-[24px]'>
            <img src='${img2}' alt='' class='w-full h-auto'/>
            <img src='${img3}' alt='' class='w-full h-auto' />
          </div>
          <div class='grid grid-1 gap-[24px]'>
            <img src='${img5}' alt='' class='w-full h-auto'/>
            <img src='${img4}' alt='' class='w-full h-auto'/>
          </div>
        </div>
      </div>
    `,
    date: "May 3, 2022 16:22"
  },
  {
    title: "Proin laoreet semper",
    content: `
      <div class='px-6'>
        <p class='pb-2.5'><b>Proin laoreet semper</b></p>
        <p class='pb-2.5'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. </p>
        <div class='flex flex-row justify-between gap-[24px] py-6'>            
          <audio src='${audio}'></audio>         
        </div>
      </div>
    `,
    date: "May 3, 2022 16:22"
  },
  {
    title: "Proin laoreet semper tortor ac posuere",
    content: `
      <div class='px-6'>
        <p class='pb-2.5'>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis.</p>
        <p class='pb-2.5'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.</p>
      </div>
    `,
    date: "May 3, 2022 16:22"
  }
]

export default function Article() {
  const [edit, setEdit] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlContent, setHtmlContent] = useState('');

  const handleEditorChange = (state) => {
    setEditorState(state);
    setHtmlContent(draftToHtml(convertToRaw(state.getCurrentContent())));
  };

  return (
    <>
    <div>
    { TEST_ARTICLE.map((item, key) => {
            return(
              key === edit ? (
                <div className='bg-white rounded-xl p-6 mb-[56px]' key={key}>
                  <div className='text-base font-bold leading-[24px]'>Edit Post</div>
                  <div className='py-6'>
                    <input
                      type="text"
                      className='bg-white border rounded-md border-[#00000033] w-full py-2.5 px-4 mb-6'
                      defaultValue={item.title}
                    />
                  </div>
                  <div>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleEditorChange}
                      toolbar={{
                        options: ['inline', 'list', 'textAlign', 'link', 'image'],
                      }}
                    />
                  </div>
                  <div className='flex flex-row justify-between'>
                    <button
                      className='flex flex-row justify-center gap-2 items-center w-[50%] py-3.5 mt-6 rounded-md bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)] text-white'
                      
                    >
                      <FaCheck className='w-[24px] h-[24px]' /><span className='text-base font-[600]'>Save</span>
                    </button>
                    <button
                      className='flex flex-row justify-end mr-4 gap-2 items-center w-[110px] py-3.5 mt-6 rounded-md text-textColor'
                      
                    >
                      <MdClose className='w-[24px] h-[24px]' />Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className='mb-[56px]' key={key}>
                  <div className='relative flex flex-row justify-between items-center mb-[21px]'>
                    <div className='absolute -z-[1] block w-full h-[2px] bg-[#0000001A]'></div>
                    <span className='font-bold text-base leading-[24px] text-white rounded-2xl bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)] py-1 px-4'>{item?.title}</span>
                    <div className='flex flex-row gap-2 items-center'>
                      <button
                        className='flex flex-row items-center gap-1 bg-[#C4C4C4] rounded-2xl hover:bg-primaryColor px-4 py-1 text-white'
                        onClick={() => { setEdit(key); setEditorState(htmlToEditorState(item.content)) }}
                      >
                        <MdEdit className='w-[16px] h-[16px]' /><span>Edit</span>
                      </button>
                      <button className='bg-[#C4C4C4] rounded-full hover:bg-[#FF002E] p-2 text-white'>
                        <RiDeleteBin4Line />
                      </button>
                    </div>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  <div className='text-[#818181] px-6'>
                    {item.date}
                  </div>
                </div>
              )
            )    
      }) 
    }      
    </div>
    </>
  );
}
