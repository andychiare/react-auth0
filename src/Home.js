import React from 'react';
import './Home.css'

class Home extends React.Component {
  constructor() {
      super();
      this.state = {bookList: []};
  }

  componentDidMount() {
    const accessToken = this.props.auth.getAccessToken();
    
    fetch("/api/books", {headers: new Headers({
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
    })})
        .then(response => response.json())
        .then(books => this.setState({bookList: books}))
        .catch(error => console.log(error))
  }

  render() {
    let bookList = this.state.bookList.map((book) => <li><i>{book.author}</i> - <h3>{book.title}</h3></li>);

    return <ul>
      {bookList}
    </ul>;
  }

}

export default Home;

