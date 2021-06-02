import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../header/headernav';
import Checkout from '../contact/checkout';
import Logo from '../header/logo';



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Container style={{backgroundColor:"#5f5f5fa3"}} fixed>
          <Logo />
          <Navbar />
        </Container>
        <Container>
          <Checkout></Checkout>
        </Container>
      </div>
    );
  }
}
export default Contact;