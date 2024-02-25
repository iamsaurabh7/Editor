import { Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import "./Draft.css";

const MyEditor = ({ editorState, handleEditorChange }) => {
  const handleEditorChangeInternal = (newEditorState) => {
    handleEditorChange(newEditorState);
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={handleEditorChangeInternal} />
    </div>
  );
};

export default MyEditor;
