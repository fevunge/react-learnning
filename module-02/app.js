

const textVariant = {
  default: "text-xl",
  muted: "text-xl text-(--text-secondary)",
  heading: "text-2xl font-medium",
  blast: "text-3xl font-medium",
}

function Text({as = 'span', children, className, variant, ...props}) {
  const Component = as;
  return <Component className={`${textVariant[variant]}  ${className}`} {...props}>{children}</Component>;
}

function Button({children, className, ...props}) {
  return (
    <Text as='button' variant='heading' 
      className={`px-4 py-2 flex items-center justify-center rounded-xl cursor-pointer text(--text) bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) ${className}`} 
      {...props}
    >
      {children}
    </Text>
  );
}

function App() {
  return (
    <main className={`${textVariant.default}`}>
      <Text variant='muted' >Hello, World!</Text>
      <Button>Click Me</Button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
