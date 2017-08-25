import React, { Component } from 'react';

import Header from './Header'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logo: props.logo,
      title: props.title
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        console.log(JSON.stringify(json))
        this.setState(Object.assign({}, this.state, {title: json.title}))
      })
      .catch(error => {
        console.log(`error fetching: ${error}`)
      })
  }

  render() {
    console.log(`current state: ${JSON.stringify(this.state)}`)
    const { logo, title } = this.state
    return (
      <div className="App">
        <Header logo={logo} title={title} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
