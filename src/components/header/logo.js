import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../css/nav.scss';


class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <span>
        <Link className="Logo" to="/">
          Delibird
        </Link>
      </span>
    );
  }
}
export default Logo;