/*
Get input from Editor component (textarea) via controlled form
Pass markdown string to parser
Render result
*/


import React from "react";
import Editor from "./editor";
import Previewer from "./previewer";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      markdown: ""
    }
  }

  render () {
    // const elements = (<strong><em>Bold text</em></strong>);
    return (
      <div>
        <Editor id="editor" />
        <Previewer id="preview" />
        {/* {elements} */}
      </div>
    );
  }
}

export default App;
