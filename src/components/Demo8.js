import React, { useState, useEffect } from "react"

const Demo8 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count === 0) {
            document.title = `you clicked ${count} times`
        }
    })
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ () => setCount(count+1) } >Clicked me</button>
        </div>
    )
}

export default Demo8