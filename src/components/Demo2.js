// import React from "react"

// export default class Demo2 extends React.Component {

//     state = {
//         count: 0
//     }

//     componentDidMount() {
//         document.title = `you clicked ${this.state.count} times`
//     }
//     componentDidUpdate() {
//         document.title = `you clicked ${this.state.count} times`
//     }
//     render() {
//         return (
//             <div>
//                hello 
//                <button onClick={ () => { this.setState({ count: this.state.count +=1}) } } >add</button>
//             </div>
//         )
//     }
// }

import React, { useState, useEffect } from "react"

export default () => {
    const [count, setCount] = useState(0);
    /**
     * useEffect
     * componentDidMount
     * componentDidUpdate
     * componentWillUnmount
     */
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            hhello: { `You clicked ${ count } times` }
            <button onClick={ () => { setCount(count + 1) } }>new add</button>
        </div>
    )
}