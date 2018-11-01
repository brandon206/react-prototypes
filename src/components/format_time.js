import React, {Component} from 'react';

class FormatTime extends Component{
    constructor (props) {
        super(props)
    }
    render (){
        return (
            <div>{this.props.elapsed}</div>    
        )
    }
}

export default FormatTime;