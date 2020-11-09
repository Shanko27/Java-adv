import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        let {user} = this.props
        this.state = {user};
    }

    changeStatus = () => {
      let {user} = this.state;

       if(user.status === true){
          user.status = `true`;
       }
         if(user.status === false){
            user.status = `false`;
         }
      this.setState({
        user
      })
    }
    render() {

        return (
            <div>{this.state.user.name} - {this.state.user.age} - {this.state.user.status}
            <button onClick={this.changeStatus}>change</button></div>
        );
    }
}

export default User;