import React from "react"

export default class Demo15 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // setState当前的情况下，异步操作
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState(
            (prevState, props) => ({
                count: prevState.count + 1
            })
        )
        this.setState(
            (prevState, props) => ({
                count: prevState.count + 1
            })
        )
        this.setState(
            (prevState, props) => ({
                count: prevState.count + 1
            })
        )
    }
    
    render() {
        const { count } = this.state;
        return (
            <div>
                { count }
            </div>
        )
    }
    
}