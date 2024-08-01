import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import the editor's CSS
import { FaCheck } from "react-icons/fa";
import MyEditor from './Editer';

export default function CreatePost() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [htmlContent, setHtmlContent] = useState('');

    // Handle editor state change
    const handleEditorChange = (state) => {
        console.log(state)
        setEditorState(state);
        setHtmlContent(draftToHtml(convertToRaw(state.getCurrentContent())));
    };

    return (
        <div>
            <input type="text" className='bg-white border rounded-md border-[#00000033] w-full py-2.5 px-4 mb-6' placeholder='Input post title'/>
            <Editor
                editorState={editorState}
                placeholder='text'
                onEditorStateChange={handleEditorChange}
                toolbar={{
                    options: ['inline', 'list', 'textAlign', 'link','image',],
                    image: {
                        previewImage: true,
                        uploadCallback: (file) => {
                          return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              resolve({
                                data: {
                                  url: reader.result,
                                },
                              });
                            };
          
                            reader.onerror = (reason) => reject(reason);
          
                            reader.readAsDataURL(file);
                          });
                        },
                        alt: { present: true, mandatory: true },
                      },
                }}
            />
            <button className='flex felx-row justify-center gap-2 items-center w-[50%] py-3.5 mt-6 rounded-md bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)] text-white'>
                <FaCheck className='w-[24px] h-[24px]'/><span className='text-base font-[600]'>Post</span>
            </button>
            {/* <h2>Content in HTML:</h2> */}
            {/* <textarea
                readOnly
                value={htmlContent}
                style={{ width: '100%', height: '200px' }}
            /> */}
            <MyEditor/>
        </div>
    );
}
