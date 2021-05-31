import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Logo from '../header/logo';
import Navbar from '../header/headernav';
import '../../css/home.scss';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AboutDelibird from '../About/about_delibird';

function Footer() {
  return (
    <div className="footer-pos">
      <Typography variant="body2" color="textSecondary" align="left">
        대표 전화: 010 6747 8803 | 대표자: TeamYH
      </Typography>
      <Typography variant="body2" color="textSecondary" align="left">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Delibird
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      section: {
        name: 'about',
        ref: React.createRef(),
      }
    }
  }

  gotoDetail = section =>{
    var el = section.ref.current;
    console.log(el);
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: 500,
    });
  }

  render() { 
    return ( 
      <div>
        <Container fixed className="container-form">
          <Logo />
          <Navbar />
          <div className="comment">
            <div>서빙혁명, 딜리버드와 함께하세요!</div>
            <div className="button-pos2">
              <Link href="/contact"><button className="button-shape">상담 요청</button></Link>
              <button onClick={() => this.gotoDetail(this.state.section)} className="button-shape">딜리버드란?</button>
            </div>
          </div>
        </Container>
        <Container className="body-container">
          <Divider />
          <AboutDelibird ref={this.state.section.ref}/>
        </Container>
        <Container className="footer-container">
          <Divider />
          <Footer />
        </Container>
        
        
      </div>
    );
  }
}
export default Home;