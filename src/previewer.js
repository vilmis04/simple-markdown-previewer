import { marked } from "marked";
import DOMPurify from 'dompurify';


export default function Previewer(props) {
    const dirty = marked.parse(props.text);
    const clean = DOMPurify.sanitize(dirty);
    function createMarkup() {
        return {__html: clean};
      }
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        padding: '2rem'
    }
    return (
        <div id="preview" dangerouslySetInnerHTML={createMarkup()}
            style={styles}></div>
    );
}