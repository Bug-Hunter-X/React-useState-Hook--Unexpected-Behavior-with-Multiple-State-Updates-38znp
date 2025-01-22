```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // Now works correctly, functional updates are used
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```