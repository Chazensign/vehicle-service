import React, { Component } from 'react'
import axios from 'axios'

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      years: [],
      makes: [],
      models: [],
     }
  }
  componentDidMount = () => {
    axios.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears')
    .then(res => {
      console.log(res)
    })
  }
  render() { 
    return ( 
      <div>

      </div>
     )
  }
}
 
export default AddVehicle