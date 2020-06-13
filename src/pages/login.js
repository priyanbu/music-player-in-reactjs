import React from 'react';



class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          loggedIn:false
      };
    }
   handleChange = () =>{
     this.setState({loggedIn:true})
   }
  
    render() {
      return (
        <div className="body-wrapper">
      <div className="body-contant">
        <h1>Login page</h1>
      </div>
    </div>
      );
    }
  }

export default Login;