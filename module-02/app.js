

const textVariant = {
  default: "text-xl",
  muted: "text-xl text-(--text-secondary)",
  heading: "text-2xl",
  blast: "text-3xl",
}

function App() {
  return (
    <main className={`${textVariant.default}`}>
      <h1>Hello, React 18!</h1>
      <p>This is a simple React application.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
