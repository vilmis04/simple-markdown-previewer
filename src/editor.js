// import { useState } from 'react';

export default function Editor(props) {

    return (
        <div>
            <textarea id="editor" placeholder="Enter your markup..." onChange={(event) => props.onChange(event.target.value)}></textarea>
        </div>
    );
}