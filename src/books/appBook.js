import React, { Component } from 'react';
import Titles from './Component/Title'
import Form from './Component/Form'
import Books from './Component/Book'

const API_KEY = "AIzaSyBMdi7RJEQui2UgSBFansHQxKbVA2_Z7tE"

class AppBook extends Component {
    state = {
        title: "",
        authors: "",
        description: "",
        publisher: ""
    }
    
    getBooks = async (e) => {
        e.preventDefault();
        const bookTitle = e.target.elements.title.value;
        const bookAuthors = e.target.elements.authors.value;
        const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}+inauthor:${bookAuthors}&printType=books&key=${API_KEY}`)
        const data = await api_call.json();
        
        if (bookTitle && bookAuthors) {
            this.setState({
            title: data.items[0].volumeInfo.title,
            authors: data.items[0].volumeInfo.authors[0],
            publisher: data.items[0].volumeInfo.publisher,
            description: data.items[0].volumeInfo.description,
            error: ''
            });
        } else {
            this.setState({
            title: "",
            authors: "",
            description: "",
            publisher: "",
            error: 'Merci d entrer une valeur correcte.'
            });
       }
    }
    
    render() {
        return (
          <div className="bloc book">
            <div className="content">
                <Titles />
                <Form getBooks={this.getBooks} />
                <Books 
                    title={this.state.title}
                    authors={this.state.authors}
                    description={this.state.description}
                    publisher={this.state.publisher}
                    error={this.state.error}
                />
            </div>
          </div>
        );
        }
}

export default AppBook;
