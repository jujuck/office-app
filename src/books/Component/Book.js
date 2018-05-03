import React from 'react';

const Books = props => (
    <div>
        { props.title && <p>Titre : { props.title }</p>}
        { props.authors && <p>Auteurs : { props.authors } </p>}
        { props.publisher && <p>Publié par: { props.publisher }</p>}
        { props.description && <p>Description: { props.description }</p>}
        { props.error && <p>{ props.error }</p>}
    </div>
);


export default Books;