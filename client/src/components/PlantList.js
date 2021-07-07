import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super();
    this.state = {
      plants: [],
      filteredPlants: [],
      searchString: "",
    }
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios.get("http://localhost:3333/plants")
      .then(res => {
        console.log("cea: PlantList.js: PlantList: CDM: res plantsData: ", res.data.plantsData);
        this.setState({plants: res.data.plantsData, filteredPlants: res.data.plantsData});
      })
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({searchString: e.target.value});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchString !== this.state.searchString) {
      this.setState({
        filteredPlants: 
        this.state.plants.filter(plant => plant.name.toLowerCase().includes(this.state.searchString.toLowerCase()))
      })
    }
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
        <input id = "search" type = "text" name = "search" value = {this.state.searchString} placeholder = "Search plants..." onChange = {this.handleChange} />
        <main className="plant-list">
          {this.state?.filteredPlants?.map((plant) => (
            <div className="plant-card" key={plant.id}>
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p><span role = "img" aria-label = "sun icon">☀️</span> {plant.light}</p>
                  <p><span role = "img" aria-label = "water icon">💦</span> {plant.watering}x/month</p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </>
    );
  }
}
