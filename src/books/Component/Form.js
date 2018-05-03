import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getBooks}>
        <input type="text" name="title" placeholder="Title..."/>
        <input type="text" name="authors" placeholder="Authors..."/>
        <button>Get Books</button>
    </form>
);

export default Form;