const Style = {
  button: 'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  bbutton: 'text-white bg-back hover:bg-black focus:outline-none focus:ring-4 focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black'
}

const CounterContext = React.createContext();

function CounterProvider({ children }) {
  const [savedCount, setSavedCount] = React.useState([]);

  function saveCount(count) {
    setSavedCount((prev) => [...savedCount, count]);
  }

  return (
    <CounterContext.Provider value={{ savedCount, saveCount}}>
      {children}
    </CounterContext.Provider>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  const { saveCount } = React.useContext(CounterContext);
  return (
    <>
      <p>{`Count: ${count}`}</p>
      <button className={Style.button} onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button className={Style.bbutton} onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button className={Style.button} onClick={() => saveCount(count)}>Save</button>
    </>
  )
}

function CounrList() {
  const { savedCount } = React.useContext(CounterContext);
  return (
    <>
      <ul className="list-disc list-inside">
        { savedCount.map((count, index) => (
            <li key={index}>{count}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <h1 className="font-medium text-2xl text-center my-4 font-bold">
        Welcome to JSX World
      </h1>
      <CounterProvider>
        <Counter />
        <CounrList />
      </CounterProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
