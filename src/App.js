import React from 'react';
import Modal from './Modal/Modal';
import Booking from './Booking/Booking';
import ConfirmBooking from './Booking/ConfirmBooking';
import { Button } from "@material-ui/core";
import Backdrop from './Backdrop/Backdrop';

class App extends React.Component {
  state={
    showModal: true,
    submit: false
  }

  showModalHandler = () => {
    this.setState({showModal: !this.state.showModal})
  }
  submitHandler = () => {
    this.setState({submit: true})
  }
  confirmSubmitionHandler = () => {
    this.setState({ showModal: false, submit: false })
  }
  
  render() {
    const submition = (
      this.state.submit ?
      <ConfirmBooking onConfirmSubmit={this.confirmSubmitionHandler} /> :
      <Booking cancelSubmition={this.showModalHandler} onSubmit={this.submitHandler} />
    )
      
    return (
      <div className="App">
        <Backdrop show={this.state.showModal} cancelBackdrop={this.showModalHandler} />
        
        <Modal show={this.state.showModal} /* cancelModal={this.showModalHandler} */ >
          {/* <Booking cancelSubmition={this.showModalHandler} onSubmit={this.submitHandler} /> */}
          {submition}
        </Modal>

        <Button onClick={this.showModalHandler}>Show modal</Button>
      </div>
    );
  }
}

export default App;
