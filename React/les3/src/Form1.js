import React, {Component} from 'react';

class Form1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.xxx = React.createRef();
    }
    render() {
        return (
            <div>
              <input ref={this.xxx}/>
              <button onClick={this.action1}>ok</button>
            </div>
        );
    }

    action1 = () => {
        console.log(this.xxx.current.value);

    }
}

export default Form1;