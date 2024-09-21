import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

function QuillEditor() {
    const quillRef = useRef(null);

    useEffect(() => {
        new Quill(quillRef.current, {
            theme: 'snow'
        });
    }, []);

    return <div ref={quillRef} />;
}

export default QuillEditor;