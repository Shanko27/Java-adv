import './App.css';
import Users from "./components/Users";
import React, {Component} from 'react';
import {UserService} from "./services/UserService";
import User from "./components/User";


export class App extends Component {
    _userService = new UserService();


state = {userIt: [],
    item: null};


    async componentDidMount() {
        let users = []
         users  = await this._userService.getAllUser();
        this.setState(()=>{
            return {userIt: users}
        });
    }
    getOneUserApp = (id) =>{
        let filter = this.state.userIt.filter(value => value.id === id);
        this.setState({item: filter[0]});
    };
    render() {

        let {userIt} = this.state;
        let {item} = this.state;
        return (
            <div>
                <Users items={userIt}
                 getOneUsers={this.getOneUserApp}
                />
                <hr/>
                {
                    item && (<User item={item}/>)
                }
            </div>
        );
    };
}


export default App;
