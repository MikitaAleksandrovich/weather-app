import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import SearchBar from './components/search-bar/search_bar';
import {bindActionCreators} from 'redux';
import {fetchWeather} from './actions/index';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  };

  onInputChange = (e)=> {
    this.setState({
      city: e.target.value
    })
  };


  onFormSubmit = (e)=> {
    e.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({
      city: '',
    });  
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

