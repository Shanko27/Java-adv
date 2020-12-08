import React, {Component} from 'react';

class Form2 extends Component {
    state = {
        input: 'Text'
    }
    render() {
        return (
            <div>
                <input onChange={this.inputChange}/>
            </div>
        );
    }

    inputChange = (e) => {
        console.log(e.target.value);
        this.setState({
    input: e.target.value
    });
    }
}

export default Form2;