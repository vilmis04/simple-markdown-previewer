import { marked } from "marked";
import DOMPurify from 'dompurify';

export default function Previewer(props) {
    const dirty = marked.parse(props.text);
    const clean = DOMPurify.sanitize(dirty);
    function createMarkup() {
        return {__html: clean};
      }
    return (
        <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>
    );
}