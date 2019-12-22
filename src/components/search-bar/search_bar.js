import React from 'react';
import './search_bar.css';
import styled from 'styled-components';


class SearchBar extends React.Component{

  render() {
    
    return(
      <section>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 ">
              <form onSubmit={e => this.props.onFormSubmit(e)} autoComplete="on">
                <div className="input-group input-container">
                  <input
                     type="text"
                     className="form-control"
                     
                     placeholder="Enter City Name"
                     value={this.props.city}
                     onChange={this.props.onInputChange}
                    />
                  <div className="input-group-prepend search">
                    <i className="fa fa-search"></i>
                  </div>
                  
                </div>
                <Error>{this.props.error}</Error>
              </form>
            </div>
          </div>
      </section>   
    )
  }
};


export default SearchBar;

const Error = styled.p`
    color: red;
`;

