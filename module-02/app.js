
const textVariant = {
  default: "text-xl",
  muted: "text-xl text-(--text-secondary)",
  heading: "text-2xl font-medium",
  blast: "text-3xl font-medium",
}

const buttonVariant = {
  default: "bg-(--background)",
  primary: "bg-(--primary)",
}

function Text({as = 'span', children, className, variant='default', ...props}) {
  const Component = as;
  return <Component className={`${textVariant[variant]}  ${className}`} {...props}>{children}</Component>;
}

function Button({children, variant='default', className, ...props}) {
  return (
    <Text 
      as='button' 
      variant='heading'
      className={`${buttonVariant[variant]} p-3 flex items-center justify-center rounded-xl cursor-pointer 
        text-(--text) bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow) 
        ${className}`
      } 
      {...props}
    >
      {children}
    </Text>
  );
}

function Card({children, className, ...props}) {
  return (
    <div 
      className={
        `bg-(--background) py-16 px-4 rounded-2xl shadow-(--shadow)  ${className}`
      } 
      {...props}
    >
      {children}
    </div>
  );
}

function CalculatorKeyboard() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>CS</Button>
      <Button className="col-span-2 ">C</Button>
      <Button variant='primary'>/</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button variant='primary'>x</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button variant='primary'>-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button variant='primary'>+</Button>
      <Button className="col-span-2">0</Button>
      <Button>.</Button>
      <Button variant='primary'>=</Button>
    </div>
  );
}

function CalculatorDisplay() {
  return (
    <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
      <Text variant="muted" className="flex items-center justify-end">
        2 + 3
      </Text>
      <div className="flex items-center justify-between">
        <Text variant="muted" className="flex items-center">=</Text>
        <Text variant="blast" className="flex items-center justify-end">5</Text>
      </div>
    </div>
  );
}

function Calculator(params) {
  return (
    <Card className="flex flex-col gap-[1.625rem] w-[22.75rem] py-12 px-8">
      <CalculatorDisplay />
      <CalculatorKeyboard />
    </Card>
  )
}

function App() {
  return (
    <main className={`${textVariant.default} text-(--text) font-(--font-sans) py-28 px-4`}>
     <Calculator />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
