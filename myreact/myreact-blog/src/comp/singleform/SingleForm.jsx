import React, {useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './singleform.css';

export default function SingleForm() {
  const [ editorState, setEditorState ] = useState(() => 
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState])
  return (
    <div className="sform">
      <img src="images/post01.jpg" alt="bannerImg" />
      <h1 className="postTitle">Posting</h1>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder="제목을 입력하세요."  className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <div style={{border:"1px solid #333", padding: "2px", minHeight: '400px'}}>
          <Editor
              editorState = { editorState }
              onEditorStateChange = { setEditorState }
            />
          </div>
        </div>
        <div className="btnbox">
          <button className="writeSubmit"> 글 올리기 </button>
        </div>
      </form>
    </div>
  )
}
