# React useEffect setTimeout Cleanup Issue

This repository demonstrates a common bug in React applications involving the use of `setTimeout` within the `useEffect` hook without proper cleanup.  The issue arises when the component renders multiple times, leading to multiple timers running concurrently, causing unintended behavior and potentially performance problems.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides a corrected version.