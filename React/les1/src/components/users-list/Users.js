import React, {Component} from 'react';
import {users} from "../../Data/data";
import user from "../user/user";
import User from "../user/user";

class Users extends Component {
    render() {
        return (
            <div>
                {
                    users.map((item, index)=>{
                        return(<User user={item} key={index} />)
                    })
                } </div>
        );
    }
}

export default Users;