import React, { Component } from 'react'

export default class Weather extends Component {
  constructor(props) {
    super(props)
    const { isLoading } = this.props
    this.state = {
      // isLoading: false,
      item: []
    }
  }
  dmloading =()=>{
    const { change }= this.props
    
    change()
  }
  Weather = () => {
    console.log(this.props.isLoading)
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=1566083&appid=87b3790f19cab150c1b1b74107d95e0a")
      .then(res => res.json())
      .then(
        (json) => {
          console.log(json)
          
          this.setState({
            // isLoading: true,
            item: json
          }, ()=> this.dmloading())
        },
        (error) => {
          this.dmloading ()
          this.setState({
            // isLoading: true,
            error
          })
        }
      ).catch(e => { console.log(e) })
  }
  callInterval = () => {
    setInterval(() => {
      console.log("Đã hết 10s")
      this.Weather()
    }, 10000);
  }

  componentDidMount() {
    this.callInterval()
    this.Weather()
  }

  render() {
    const { item } = this.state
    const { isLoading }= this.props
    if (isLoading) {
      return <div>loading...</div>
    } else {
      return (
        <div>
          <div>
            {item.city.name}
          </div>
          <div>
            {item.list[0].clouds.all}
          </div>
          <div>
            {item.list[0].wind.speed}
          </div>
        </div>
      )
    }
  }
}
