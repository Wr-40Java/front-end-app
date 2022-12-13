import React, { Component } from 'react'

export default class InsuranceCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            isCarsLoaded :false,
            error: null
        }
    }

    componentDidMount() { this.fetchCars() }

    fetchCars = () => {
       fetch("http://localhost:8080/api/car/get", {method: "GET"})
        .then(res => res.json())
        .then(result => { console.log(result);
            this.setState({
                cars: result,
                isCarsLoaded: true
            });
        },
        error => {
            this.setState({
                isCarsLoaded: false,
                error
            })
        }
        );
        }
    

  render() {
    if(this.state.error) {
        return <div className='container'>{this.state.error.message}</div>
    } else if(!this.state.isCarsLoaded) {
        return <div className='container'>Loading... </div>
    } else {
    return (
      <div className='container'>
        <ul>{this.state.cars.map((item, key) => {
                <li key={key}>{item.vin_number}</li>
            })}
        </ul>
      </div>
    )}
  }
}
