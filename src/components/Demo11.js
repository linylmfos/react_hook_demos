import React, { useState, useCallback } from "react"


/* 把内联回调函数及依赖项数组作为参数传入 useCallback，
它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。
当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染
（例如 shouldComponentUpdate）的子组件时，它将非常有用。 */
const Demo11 = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    function clickHandler() {
        setCount(count + 1)
    }
    return (
        <div>
            <p>{count} </p>
            <button onClick={ clickHandler }>Click me</button>

            <p>{count1} </p>
            <button onClick={useCallback(() => setCount1(count1+1), [count]) }>Click me</button>
        </div>
    )
}

export default Demo11