import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.stats.name}</h1>
                <h1>You are {this.props.stats.age}</h1>
                <h1>Your weight is {this.props.stats.weight}</h1>
            </div>
        );
    }
}

export default Display;