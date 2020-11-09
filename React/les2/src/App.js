import './App.css';
import Users from "./components/Users";
import React, {Component} from 'react';
import {UserService} from "./services/UserService";


export class App extends Component {
    _userService = new UserService();
state = {usersIt: [],
    item: null};

    async componentDidMount() {
        let users = []
         users  = await this._userService.getAllUser();
        this.setState(()=>{
            return {userIt: users}
        });
    }
    // getOneUserApp = (id) =>{
    //     let filter = this.state.usersIt.filter(value => value.id === id);
    //     this.setState({item: filter[0]});
    // };
    render() {

        let {userIt} = this.state;
        console.log(this.users);
        console.log(this._userService.getAllUser());
        return (
            <div>
                <Users items={userIt}
                // getOneUsers={this.getOneUserApp}
                />
            </div>
        );
    };
}


export default App;
