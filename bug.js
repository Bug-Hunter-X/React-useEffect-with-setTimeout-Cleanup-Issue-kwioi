```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over a mutable variable
    let timeoutId;
    const increment = () => {
      timeoutId = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    };

    increment();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```