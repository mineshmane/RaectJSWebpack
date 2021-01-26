import React from 'react'
    // "start": "webpack-dev-server -config ./webpack.config.js -mode development",

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}

export default App