# React useState Hook: Unexpected Behavior with Multiple State Updates

This repository demonstrates a common issue encountered when using React's `useState` hook: setting the state multiple times in quick succession. This can lead to unexpected behavior as React batches state updates for optimization.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution that avoids this issue by using functional updates. 

## Problem
The problem arises when `setCount` is called twice in rapid succession within the `handleClick` function. React batches state updates to improve performance.  This means that only the *last* update is applied, potentially leading to unexpected behavior or subtle bugs that are hard to track down.

## Solution
The correct solution is to use a functional update. A functional update takes the previous state as an argument. This ensures that the update is always based on the most current value of the state.

## How to run the code
1. Clone this repository
2. Navigate to the repository's directory in the terminal
3. Run `npm install` to install React dependencies
4. Run `npm start` to start the development server
