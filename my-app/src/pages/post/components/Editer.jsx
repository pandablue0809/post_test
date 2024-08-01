// src/components/MyEditor.js
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from './custom-build';

const MyEditor = () => {
    const [editorData, setEditorData] = useState('');

    return (
        <div className="editor-container">
            <CKEditor
                editor={CustomEditor}
                data={editorData}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
            />
            <div className="output">
                <h3>Editor Output:</h3>
                <div dangerouslySetInnerHTML={{ __html: editorData }} />
            </div>
        </div>
    );
};

export default MyEditor;
