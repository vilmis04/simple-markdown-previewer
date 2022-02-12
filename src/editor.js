// import { useState } from 'react';

export default function Editor(props) {
    const containerStyles = {
        display: 'flex',
        width: '40%',
        // padding: '2rem',
        border: 'solid black 1px',
        margin: '0.5rem'
        }
    const textAreaStyles = {
        display: 'flex',
        width: '100%',
        padding: '0.5rem',
        border: 'none',
        resize: 'none'
    }
    return (
        <div style={containerStyles}>
            <textarea id="editor" placeholder="Enter your markup..."
            value={props.value} style={textAreaStyles}
            onChange={(event) => props.onChange(event.target.value)}></textarea>
        </div>
    );
}