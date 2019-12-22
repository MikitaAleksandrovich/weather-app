import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import SearchBar from './components/search-bar/search_bar';
import CurrentWeather from './components/current-weather/current-weather';
import {bindActionCreators} from 'redux';
import {fetchWeather} from './actions/index';
import {connect} from 'react-redux';

class App extends Component {
  state = {
    city: '',
    cityArr: [],
  }

  onInputChange = (e)=> {
    this.setState({
      city: e.target.value
    });
  };


  onFormSubmit = (e)=> {
    e.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({
      city: '',
    });  
    this.state.cityArr.push(this.state.city);
    localStorage.setItem('cities', JSON.stringify(this.state.cityArr));
    console.log(this.state.cityArr);
  };


  render() {

    const { city } = this.state;

    return (
          <section>
            <Header />
            <div className="container">                
              <SearchBar
                onFormSubmit = {this.onFormSubmit}
                onInputChange = {this.onInputChange}
                city = {city}
              />
              <CurrentWeather city={city}/>
            </div>        
          </section>
        );
  }
};


const mapStateToProps = state => {
  return{
    weather: state.weather
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeather}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

