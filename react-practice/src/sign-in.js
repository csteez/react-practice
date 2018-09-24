import React, { Component } from 'react';
import './styles/sign-in.css'; 

export default class Dashboard extends React.Component { 
	state = { show: false };
	showModal = () => {
  	this.setState({show: true}); 
  }
  
  hideModal = () => {
  	this.setState({show: false}); 
  }
  
  handleLogin = () => {
  	this.setState({loggedIn: true, show: false});
  }
  
  render() {
  	if (this.state.loggedIn) {
    return (<main>
      You're now logged in!
    </main>)
    } else {
      return (<main>
        <h1>React modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
           <input id="username" placeholder="user name">
            </input>
            <input id="password" placeholder="password"></input>
            <br/>
            <button id="submit" onClick={this.handleLogin}>Login</button>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    	); 
    }
  }
}

const Modal =({handleClose, show, children}) =>{
	const showHideClassName = show ? "modal display-block" : "modal display-none";  

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button id="button-close" onClick={handleClose}>Close</button>
        </section>
      </div>
    ); 
}