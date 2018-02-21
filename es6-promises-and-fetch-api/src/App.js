import React, { Component } from 'react';

const MYAPI ="http://localhost:4567/books.json"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    fetch(MYAPI)
      .then(response => {
        if (response.ok) {
          console.log(response)
          console.log(response.headers.get('Content-Type'));
          console.log(response.headers.get('Date'));
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.type);
          console.log(response.url);
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })//end frist response
      .then(response => response.json())
      .then(myBookData => {
        console.log('myBookData log: ', myBookData.books[0])
        // let nextBooks = body.books;
        this.setState({ books: myBookData.books });
      })//end body response
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }//end componentDidMount


  render() {
    console.log('state', this.state.books)

    let books = this.state.books.map(book => {
      return <li key={book.id}>{book.name}</li>;
    });

    return (
      <div>
        <h1>Books</h1>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
}

export default App;
