import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //we're telling React to create some new internal state with for our component with an initial value of 0 (or whatever value we pass to useState when we call it.
  //useState will return an array that has two variables inside of it: count and setCount

  function increment() {
    setCount(count + 1);
    //Update the value of count in React's internal state to be count + 1
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;

  //Now, when the <button> element is clicked, it will run our increment function. increment calls the setCount function to do these two things:
}

export default Counter;
