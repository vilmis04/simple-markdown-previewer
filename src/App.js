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

// const initialText = "# Welcome to my React Markdown Previewer!/n"+"## This is a sub-heading.../n"+"/n"+"Heres some code, `<div></div>`, between 2 backticks./n"+"/n"+"```/n"+"// this is multi-line code:/n"+"/n"+"function anotherExample(firstLine, lastLine) {/n"+"  if (firstLine == '```' && lastLine == '```') {/n"+"/n"+"   return multiLineCode;/n"+"  }/n"+"}/n"+"/n"+"```/n"+"/n"+"You can also make text **bold**... whoa!/n"+"/n"+"Or _italic_./n"+"Or... wait for it... **_both!_**/n"+"/n"+"There's also [links](https://www.freecodecamp.org), and/n"+"> Block Quotes!/n"+"/n"+"- And of course there are lists./n"+"  - Some are bulleted./n"+"1. And there are numbered lists too./n"+"1. Use just 1s if you want!/n"+"1. And last but not least, let's not forget embedded images:/n"+"/n"+"![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
const initialText = "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n\n   return multiLineCode;\n  }\n}\n\n```\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\nOr... wait for it... **_both!_**\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // markdown: '# Marked in browser\n\nRendered by **marked**.'
      markdown: initialText
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
        <Editor onChange={this.updateMarkdown} value={this.state.markdown}/>
        <Previewer text={this.state.markdown} />
      </div>
    );
  }
}

export default App;
