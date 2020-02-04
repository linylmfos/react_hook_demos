import React from "react"

/* 
React.memo 为高阶组件。它与 React.PureComponent 非常相似，
但它适用于函数组件，但不适用于 class 组件。

如果你的函数组件在给定相同 props 的情况下渲染相同的结果，
那么你可以通过将其包装在 React.memo 中调用，
以此通过记忆组件渲染结果的方式来提高组件的性能表现。
这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果 
*/

const Child = ({ seconds }) => {
    console.log("render child");
    return <p>current time: {seconds}</p>
}

export default React.memo(Child)