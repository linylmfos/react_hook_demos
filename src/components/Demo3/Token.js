import React, { useState, useEffect } from "react"

class TokenForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const { setToken } = this.props;
        const token = this.tokenInput.value;
        if (token) {
            setToken(token);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="token" placeholder="enter your token"
                    ref={input => { this.tokenInput = input }}
                />
            </form>
        )

    }
}

// export default class TokenApp extends React.Component {

//     state = {
//         token : null
//     }

//     componentDidMount() {
//         // 数据放在本地
//         this.setState({
//             token: sessionStorage.getItem("token")
//         })
//     }

//     setToken = token => {
//         sessionStorage.setItem("token", token);
//         this.setState({token})
//     }
//     render() {
//         const { token } = this.state;
//         return (
//             <div>
//                 <h2>Hello</h2>
//                 {token ? token : <TokenForm setToken={this.setToken } />}
//             </div>
//         )
//     }
// }

const TokenApp = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    useEffect(() => {
        sessionStorage.setItem("token", token);
    })

    return (
        <div>
            <h1>hello</h1>
            {token ? token : <TokenForm setToken={setToken} />}
        </div>
    )
}

export default TokenApp