import React, { createContext } from "react"
const ThemeContext = createContext();

export default class Demo14 extends React.Component {
    state = {
        theme: "red"
    }

    render() {
        const { theme } = this.state;
        return (
            <div>
                <ThemeContext.Provider value={ theme }>
                    <Middle></Middle>
                </ThemeContext.Provider>
            </div>
        )
    }
} 

class Middle extends React.Component {
    render() {
        return (
            <div>
                <Bottom></Bottom>
            </div>
        )
    }
}

// class Bottom extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ThemeContext.Consumer>
//                     {
//                         theme => <h1>{theme}</h1>
//                     }
//                 </ThemeContext.Consumer>
//             </div>
//         )
//     }
// }

class Bottom extends React.Component {
    static contextType = ThemeContext;

    render() {
        const theme = this.context;
        return (
            <div>
                <h1>{ theme }!!</h1>
            </div>
        )
    }
}