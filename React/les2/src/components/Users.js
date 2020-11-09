import React, {Component} from 'react';
import User from "./User";


class Users extends Component {
constructor(props) {
    super(props);
}


    render() {

     let users = this.props.items;

        // let oneUsers = this.props.getOneUserApp;
        return (
            <div>
                {
                    users.map(value => (<User item={value} key={value.id}
                    // getOneUser={oneUsers}
                    />))
                }
            </div>
        );
    }
}

export default Users;