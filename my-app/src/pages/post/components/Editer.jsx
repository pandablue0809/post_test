import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function MyEditer({value, onEditorChange}) {
  console.log(value,'-------------------------')
  return (
    <Editor
      apiKey='5hjfrcb8j9vcr5694irgady32uba3cstlqiw65wqk6t13ws6'
      value={value | 'text'}
      init={{
        plugins: 'code fullscreen anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'fullscreen  code | bold italic underline strikethrough | align lineheight numlist visualblocks | link image | media table mergetags  addcomment showcomments | spellcheckdialog a11ycheck typography | checklist  bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      onEditorChange = {onEditorChange}
      initialValue={value}
    />
  );
}
