import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../../css/about.scss';


class AboutDelibird extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Grid></Grid>
        <div className="about-title">딜리버드는..</div>
      </div>
    );
  }
}
export default AboutDelibird;