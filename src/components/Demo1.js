import React, { useState } from "react"

// export default class Demo1 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Demo1 />
//             </div>
//         )
//     }
// }

// function Demo1 () {
//     return (
//         <div>
//             Hello React Hook
//         </div>
//     )
// }

export default () => {

    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0)
    return (
        <div>
            Hello React Hook {count} - {page}  !
            <button onClick={() => { setCount(count + 1) }} >Add</button>
        </div>
    )
}

// export default Demo1