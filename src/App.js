import React, { useState } from "react";
import "./App.css";
import MyEditor from "./components/MyEditor";
import Button from "./components/Button";
import { Title } from "./components/Title";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  const [editorState, setEditorState] = useState(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("editorContent");
    return savedContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      : EditorState.createEmpty();
  });

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className="App">
      <Title />
      <Button handleSave={() => handleSave(editorState, setEditorState)} />
      <MyEditor
        editorState={editorState}
        handleEditorChange={handleEditorChange}
      />
      <Notes />
      <Footer />
    </div>
  );
}

const handleSave = (editorState, setEditorState) => {
  const contentState = editorState.getCurrentContent();
  const contentToSave = convertToRaw(contentState);

  // Iterate over blocks to find the special char at the start
  for (let i = 0; i < contentToSave.blocks.length; i++) {
    const blockText = contentToSave.blocks[i].text;

    if (blockText === "") {
      contentToSave.blocks[i].type = "text";
    }

    // Check for # at the start of the line
    if (blockText.startsWith("# ")) {
      // Remove the # from the text
      const newText = blockText.substring(2);
      contentToSave.blocks[i].type = "header-one";
      contentToSave.blocks[i].text = newText;
      contentToSave.blocks[i].inlineStyleRanges = [
        {
          offset: 0,
          length: 0,
        },
      ];
    }

    // Check for * at the start of the line
    if (blockText.startsWith("* ")) {
      // Remove the * from the text
      const newText = blockText.substring(2);
      contentToSave.blocks[i].type = "bold-text";
      contentToSave.blocks[i].text = newText;
      contentToSave.blocks[i].inlineStyleRanges = [
        {
          offset: 0,
          length: newText.length,
          style: "BOLD",
        },
      ];
    }

    // Check for ** at the start of the line
    if (blockText.startsWith("** ")) {
      // Remove the ** from the text
      const newText = blockText.substring(3);
      contentToSave.blocks[i].type = "red-text";
      contentToSave.blocks[i].text = newText;
      contentToSave.blocks[i].data = { textColor: "red" };
      contentToSave.blocks[i].inlineStyleRanges = [];
    }

    // Check for *** at the start of the line
    if (blockText.startsWith("*** ")) {
      // Remove the *** from the text
      const newText = blockText.substring(4);
      contentToSave.blocks[i].type = "underline-text";
      contentToSave.blocks[i].text = newText;
      contentToSave.blocks[i].inlineStyleRanges = [
        {
          offset: 0,
          length: newText.length,
          style: "UNDERLINE",
        },
      ];
    }
  }

  const contentToSaveString = JSON.stringify(contentToSave);
  localStorage.setItem("editorContent", contentToSaveString);

  // Update editor state
  setEditorState(EditorState.createWithContent(convertFromRaw(contentToSave)));
  alert("Content saved!");
};

export default App;
