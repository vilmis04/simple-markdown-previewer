// import { useState } from 'react';

export default function Editor(props) {
    const styles = {
        display: 'flex',
        width: '100%'
        }
    return (
        <div>
            <textarea id="editor" placeholder="Enter your markup..."
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}></textarea>
        </div>
    );
}