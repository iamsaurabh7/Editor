import React from "react";
import "./Notes.css"; 

const Notes = () => {
  return (
    <div className="notes-container">
      <div className="note">
        1. Typing `#` as the first string in a line & pressing space should make
        anything you type afterwards on the same line be in a “Heading” format.
      </div>
      <div className="note">
        2. On pressing space the aforementioned `#` should disappear. - See
        “This is a heading” line in the layout image above.
      </div>
      <div className="note">
        3. Similarly, typing `*` as the first string in a line and pressing
        space should correspond to “bold” format
      </div>
      <div className="note">
        4. `**` and space = red line - `***` and space = underline
      </div>
    </div>
  );
};

export default Notes;
