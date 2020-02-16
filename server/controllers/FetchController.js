const axios = require('axios')

module.exports = {
  getYears: (req, res) => {
    axios
      .get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year')
      .then(result => {
        res.status(200).send(result.data.menuItem)
      })
      .catch(error => console.log('error', error))
  },
  getMakes: (req, res) => {
    const { year } = req.params
    axios
      .get(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=${year}`)
      .then(result => {
        res.status(200).send(result.data.menuItem)
      })
      .catch(error => console.log('error', error))
  },
  getModels: (req, res) => {
    const { year, make } = req.query
    axios
      .get(
        `https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=${year}&make=${make}`
      )
      .then(result => {
        res.status(200).send(result.data.menuItem)
      })
      .catch(error => console.log('error', error))
  },
  getTrims: (req, res) => {
    const { year, make, model } = req.query
    axios
      .get(
        `https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${make}&model=${model}`
      )
      .then(result => {
        console.log(result)

        res.status(200).send(result.data.menuItem)
      })
      .catch(error => console.log('error', error))
  }
}
