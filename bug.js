```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count updated:', count);
  }, [count]); // Only re-run effect if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // Setting state multiple times in quick succession
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```