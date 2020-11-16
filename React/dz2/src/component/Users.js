import React, {Component} from 'react';
import User from "./User";
import {UserService} from "../services/UserService";

class Users extends Component {
_userService = new UserService()
    state = {users: [],
itemId: null
};
    componentDidMount() {

        this._userService.getUsers().then(value => {
            this.setState({users: value})
        });

    }
getOneUserId = (id) => {
       let filter = this.state.users.filter(value => value.id === id);
    this.setState({itemId: filter[0]})
}

    render() {
let {itemId} = this.state

        return (
            <div>
                {this.state.users.map(value => (<User item={value} key={value.id} getOneUser={this.getOneUserId}/>))}
                <hr/>
                {itemId && (<User item={itemId}/>)}
            </div>
        );
    }
}

export default Users;