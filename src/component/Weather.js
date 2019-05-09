import React, { Component } from 'react'

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      item: []
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (json) => {
          this.setState({
            isLoading: true,
            item: json
          })
        },
        (error) => {
          this.setState({
            isLoading: true,
            error
          })
        }
      )
  }
  render() {
    const {  isLoading, item } = this.state
      if (!isLoading) {
      return <div>loading...</div>
    } else {
      return (
        <div>
          <ul>
            {item.map(item => (
              <li key ={item.id}>
                Name: {item.name} | Email: {item.email}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}
