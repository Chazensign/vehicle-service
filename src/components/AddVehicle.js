import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      years: [],
      makes: [],
      models: [],
      trims: [],
      selectedYear: '',
      selectedMake: '',
      selectedModel: '',
      selectedTrim: '',
      vehicleName: ''
     }
  }
  componentDidMount = () => {
   axios.get('/api/years')
   .then(res => {
    const yearsArr = res.data.map(year => {
      return year.text
    })
    this.setState({ years: yearsArr })
   })
  }

getMakes = (year) => {
  axios.get(`/api/makes/${year}`).then(res => {  
    let makeNames = res.data.map(make => {
      return make.text
    })
    this.setState({ makes: makeNames, selectedYear: year })
  })
}

getModels = (make) => {
  axios.get(`/api/models/?year=${this.state.selectedYear}&make=${make}`)
  .then(res => {
    const modelNames = res.data.map(obj => {
      return obj.value
    })
    this.setState({ models: modelNames, selectedMake: make });
  })
}

getTrims = (sentModel) => {
  axios
    .get(`/api/trims/?year=${this.state.selectedYear}&make=${this.state.selectedMake}&model=${sentModel}`)
    .then(res => {
      console.log(res.data)
      
      const trims = res.data.map(obj => {
        return obj.text
      })
      this.setState({ selectedModel: sentModel, trims: trims})
    })
}
giveName = (input) => {
  this.setState({ vehicleName: input })
}
setTrim = (trimIn) => {
  this.setState({ selectedTrim: trimIn })
}

  render() { 
    const { years, makes, models, trims, selectedTrim, vehicleName } = this.state
    return (
      <AddOptions>
        <h2>Year:</h2>
        <select onChange={e => this.getMakes(e.target.value)}>
          {years.map(year => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            )
          })}
        </select>
        {makes.length > 0 && (
          <>
            <h2>Make:</h2>
            <select onChange={e => this.getModels(e.target.value)}>
              {makes.map((make, i) => {
                return (
                  <option key={i} value={make}>
                    {make}
                  </option>
                )
              })}
            </select>
          </>
        )}
        {models.length > 0 && (
          <>
            <h2>Model:</h2>
            <select onChange={e => this.getTrims(e.target.value)}>
              {models.map((model, i) => {
                return (
                  <option key={i} value={model}>
                    {model}
                  </option>
                )
              })}
            </select>
          </>
        )}
        {trims.length > 0 && (
          <>
            <h2>Trim:</h2>
            <select onChange={e => this.setTrim(e.target.value)}>
              {trims.map((trim, i) => {
                return (
                  <option key={i} value={trim}>
                    {trim}
                  </option>
                )
              })}
            </select>
          </>
        )}
        {selectedTrim && <>
          <h3>Give your vehicle a name:</h3>
        <input type='text' value={vehicleName} onChange={e => this.giveName(e.target.value)}/>
        <button>Add Vehicle</button>
        </>}
      </AddOptions>
    )
  }
}
 
export default AddVehicle

const AddOptions = styled.div`
margin: 100px;
h2 {
  margin: 10px;
}
h3 {
  margin-bottom: 5px;
}
`