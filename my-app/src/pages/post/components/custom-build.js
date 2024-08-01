import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

ClassicEditor.builtinPlugins = [
    ...ClassicEditor.builtinPlugins,
    SourceEditing
];

ClassicEditor.defaultConfig = {
    ...ClassicEditor.defaultConfig,
    plugins: [
        ...ClassicEditor.defaultConfig.plugins,
        SourceEditing
    ],
    toolbar: {
        items: [
            'sourceEditing',
            '|',
            'undo', 'redo',
            '|',
            'bold', 'italic', 'underline',
            '|',
            'bulletedList', 'numberedList',
            '|',
            'link', 'blockQuote', 'insertTable',
            '|',
            'imageUpload',
            '|',
            'removeFormat', 'codeBlock'
        ]
    },
    sourceEditing: {
        // Custom configuration if needed
    }
};

export default ClassicEditor;
