// import { useState } from 'react';

export default function Editor(props) {
    const containerStyles = {
        display: 'flex',
        width: '40%',
        padding: '2rem'
        }
    const textAreaStyles = {
        display: 'flex',
        width: '100%',
        padding: '0.5rem'
    }
    return (
        <div style={containerStyles}>
            <textarea id="editor" placeholder="Enter your markup..."
            value={props.value} style={textAreaStyles}
            onChange={(event) => props.onChange(event.target.value)}></textarea>
        </div>
    );
}