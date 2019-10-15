import React from 'react'


class InputFields extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0
        }

        this.inputChanged = this.inputChanged.bind(this);     
    }

    inputChanged(event) {
        console.log(`Value changed ${event.target.name}: ${event.target.value}`);
        this.setState({[event.target.name]: event.target.value});
    } 

    render() {
        return(
            <div className="inputFields">
                a: <input type="number" name="a" onChange={this.inputChanged}></input> 
                b: <input type="number" name="b" onChange={this.inputChanged}></input>
            </div>

        );
    }  
}

export default InputFields
