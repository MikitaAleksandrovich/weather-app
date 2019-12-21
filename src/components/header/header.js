import React from 'react';
import './header.css';

class Header extends React.Component{
  render(){
    return(
      <section>
        <div className="nav d-flex">           
            <ul className="d-flex align-items-center">
              <li>Weather Finder</li>
            </ul>
        </div>
      </section>
    )
  }
};

export default Header;
