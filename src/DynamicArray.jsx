import React from 'react'


class DynamicArray extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0, 
            array: [],
        }

        this.inputChanged = this.inputChanged.bind(this);  
        this.processArray = this.processArray.bind(this); 
        this.generateArray = this.generateArray.bind(this);  
        this.squareRootArray = this.squareRootArray.bind(this);  
        
        this.renderCounter = 1;
        console.time(`render - ${this.renderCounter} `);

        this.processedArray = [];
    }

    generateArray = (a, b) => Array(b - a + 1).fill().map((x,i) => a + i);

    squareRootArray = (arr) => arr.map(x => Math.sqrt(x));

    processArray() {
        if(this.state.array.length > 0) {
            this.processedArray = this.squareRootArray(this.state.array);
            this.setState({});
        }
    }

    inputChanged(event) {
        console.log(`Value changed ${event.target.name}: ${event.target.value}`); 
        const val = parseInt(event.target.value);
        let arr = [];
        this.processedArray = [];
        if(event.target.name == "a") {
            if(val < this.state.b && val > 0) {
                arr = this.generateArray(val, this.state.b);
            }
        }
        else {
            if(val > this.state.a && this.state.a > 0) {
                arr = this.generateArray(this.state.a, val);
            }
        }          
        this.setState({
            [event.target.name]: val, 
            array: arr
        });
    } 

    render() {
        
        return(
            <div className="dynamicArray">
                <div className="inputFields">
                    a: <input type="number" name="a" onChange={this.inputChanged}></input> 
                    b: <input type="number" name="b" onChange={this.inputChanged}></input>
                </div>
                { this.state.array.length > 0 &&
                <p>
                    Generated array: {this.state.array.toString()}
                </p>
                } 
                <button onClick={this.processArray}>Process array</button> 
                { this.processedArray.length > 0 &&
                <p>
                    Processed array: {this.processedArray.toString()}
                </p>
                }                
            </div>                   
        );
    }
    
    componentDidMount() {
        console.timeEnd(`render - ${this.renderCounter} `);
    }

    shouldComponentUpdate() {
        this.renderCounter++;
        console.time(`render - ${this.renderCounter} `);
        return true;
    }

    componentDidUpdate() {
        console.timeEnd(`render - ${this.renderCounter} `);
    }
}

export default DynamicArray
