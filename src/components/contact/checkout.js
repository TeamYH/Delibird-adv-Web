import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './contact_form';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import {request} from '../../util/axios';
import qs from 'qs';
import ConfirmModal from '../Common/confirm_modal';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Delibird
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    width: 650,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];



function getStepContent(step) {
  switch (step) {
    case 0:
      return ;
    default:
      throw new Error('Unknown step');
  }
}


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalOpen: false,
      activeStep: 0,
      name: '',
      phone: '',
      email: '',
      comment: '',
    }
  }

  handleName = (e) =>{
    this.setState({name: e.target.value});
  }

  handlePhone = (e) =>{
    this.setState({phone: e.target.value});
  }

  handleEmail = (e) =>{
    this.setState({email: e.target.value});
  }

  handleComment = (e) =>{
    this.setState({comment: e.target.value});
  }

  handleSubmit = async() =>{
    var data = {
    customer: this.state.name,
      phonenum: this.state.phone,
      email: this.state.email,
      comment: this.state.comment
    }
    var res = await request('POST', '/superuser_db/counsel_list?'+qs.stringify(data) );
    console.log(res);
    this.openModal();
    console.log(this.state);
  }

  openModal = () =>{
    this.setState({modalOpen: true});
  }

  closeModal = () =>{
    this.setState({modalOpen: false});
    this.props.history.push('/');
  }

  render() {
    const activeStep = this.state.activeStep;
    const {classes} = this.props; 
    return (
      <React.Fragment>
      <ConfirmModal 
        open ={this.state.modalOpen}
        close ={this.closeModal}
        msg = "저장되었습니다"
      />
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Delibird 상담 요청
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            상담 요청
          </Typography>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <AddressForm 
                  handleName = {this.handleName}
                  handlePhone = {this.handlePhone}
                  handleEmail = {this.handleEmail}
                  handleComment = {this.handleComment}
                />
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                    className={classes.button}
                  >
                    Submit
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(withRouter(Checkout));