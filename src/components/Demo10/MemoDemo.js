import React from "react"
import Child from "./Child"

export default class MemoDemo extends React.PureComponent {
    state = {
        time: new Date()
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
                // time: 1
            })
        }, 1000)
    }

    render() {
        console.log('render');
        return (
            <div>
                <Child seconds={1} />
                {this.state.time.toString()}
            </div>
        )
    }
}