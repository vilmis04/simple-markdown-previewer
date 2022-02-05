/*
Get input from Editor component (textarea) via controlled form
Pass markdown string to parser
Render result
Apply styles
Implement maximizing feature
*/


import React from "react";
import Editor from "./editor";
import Previewer from "./previewer";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      markdown: '# Marked in browser\n\nRendered by **marked**.'
    }
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
  updateMarkdown(text) {
    this.setState({
      markdown: text
    });
  }

  render () {
    return (
      <div>
        <Editor id="editor" onChange={this.updateMarkdown} value={this.state.markdown}/>
        <Previewer id="preview" text={this.state.markdown} />
      </div>
    );
  }
}

export default App;
