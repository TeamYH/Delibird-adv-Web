import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../../css/about.scss';
import ReactPlayer from 'react-player';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


class AboutDelibird extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Container maxWidth="lg" className="about-container-form"></Container>
        <Grid container spacing={10} className="about-form">
          <Grid item xs={6} className="about-text-contents">
            <Box style={{ backgroundColor: "white", marginLeft: "30px"}}>
              <Grid container maxWidth="lg">
                <Grid item xs={6}>
                  <div className="about-title"> 딜리버드를 통해</div>
                  <div className="about-text">
                    <div>원격 관제 서빙</div>
                    <div>청소 기능</div>
                    <div>간편한 지도 생성 및 테이블 지정</div>
                  </div>
                  <div className="sub-comment">다양한 자동화 서비스를 경험해보세요!</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="robot-iamge"></div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <ReactPlayer url='https://youtu.be/G-_rxGdJCnY' width="100%" height="100%" controls/>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}
export default AboutDelibird;