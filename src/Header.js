import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      logo: props.logo,
      title: props.title
    }

    this.loadTitleFromAWS = this.loadTitleFromAWS.bind(this)
  }

  static propTypes = {
    logo: PropTypes.string.required,
    title: PropTypes.string.required,
  }

  static defaultProps = {
    title: 'Title Not Set'
  }

  loadTitleFromAWS(){
    console.log('loading title from AWS')
    console.log(`logo: ${this.state.logo}`)
  }

  componentWillUpdate(){
    console.log(`componentWillUpdate`)
  }

  componentWillReceiveProps(nextProps){
    this.setState(Object.assign({}, this.state, {...nextProps}))
  }

  render(){
    const { logo, title } = this.state

    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
        <button onClick={this.loadTitleFromAWS}>Click to load from AWS</button>
      </div>
    )
  }
}
