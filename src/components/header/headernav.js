import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import '../../css/nav.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <span>
          <nav className="navbar-end">
            <span className="button-pos">
              <Link className="Link-form" to="/product">
                Product
              </Link>
            </span>
            <span className="button-pos">
              <Link className="Link-form" to="/contact">
                Contact
              </Link>
            </span>
          </nav>
      </span>
    );
  }
}
export default Navbar;