import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FaCheck } from "react-icons/fa";

// Define a custom upload adapter for handling video and audio files
class MyCustomUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    // Starts the upload process
    upload() {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            const file = this.loader.file;

            reader.onloadend = () => {
                const url = reader.result;
                resolve({ default: url });
            };

            reader.onerror = () => {
                reject('Upload failed');
            };

            reader.readAsDataURL(file);
        });
    }

    abort() {
        // Handle abort here if needed
    }
}

// Configure CKEditor to use the custom upload adapter
const MyCustomUploadAdapterPlugin = (editor) => {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MyCustomUploadAdapter(loader);
    };
};

export default function CreatePost() {
    const [editorData, setEditorData] = useState('');

    // Handle the editor data change
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
    };

    return (
        <div>
            <input type="text" className='bg-white border rounded-md border-[#00000033] w-full py-2.5 px-4 mb-6' placeholder='Input post title'/>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    extraPlugins: [MyCustomUploadAdapterPlugin],
                    toolbar: [
                        'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'blockQuote', 'imageUpload', 'mediaEmbed'
                    ],
                    mediaEmbed: {
                        previewsInData: true,
                    },
                }}
                onChange={handleEditorChange}
            />
            <button className='flex flex-row justify-center gap-2 items-center w-[50%] py-3.5 mt-6 rounded-md bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)] text-white'>
                <FaCheck className='w-[24px] h-[24px]'/><span className='text-base font-[600]'>Post</span>
            </button>
            {/* <h2>Content in HTML:</h2> */}
            {/* <textarea
                readOnly
                value={editorData}
                style={{ width: '100%', height: '200px' }}
            /> */}
        </div>
    );
}
