# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library that lightens the load of multiple DOM operations due to data changes by using a virtual DOM to write over components without refreshing the entire app.

1. What does it mean to think in react?

It means thinking of an app as multiple smaller, reuseable parts.

1. Describe state.

An object that represents the parts of the app that can change, and when they do change, causes the app to re-render.

1. Describe props.

Variables passed from React components into their child components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Anything that effects something outside the scope of the function being executed. You sync effects to state or prop changes using a dependency array as the second argument in the the effect hook. useEffect()
