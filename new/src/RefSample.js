import React, {Component} from "react";

class RefSample extends Component{
    imput = React.createRef();

    handleFocus = () =>{
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input}/>

            </div>
        );
    }
}

export default RefSample;
