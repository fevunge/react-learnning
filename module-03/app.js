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

const buttosList = [
  {label: 'CE', variant: 'default'},
  {label: 'C', variant: 'default', className: 'col-span-2'},
  {label: '/', variant: 'primary'},
  {label: '7', variant: 'default'},
  {label: '8', variant: 'default'},
  {label: '9', variant: 'default'},
  {label: '*', variant: 'primary'},
  {label: '4', variant: 'default'},
  {label: '5', variant: 'default'},
  {label: '6', variant: 'default'},
  {label: '-', variant: 'primary'},
  {label: '1', variant: 'default'},
  {label: '2', variant: 'default'},
  {label: '3', variant: 'default'},
  {label: '+', variant: 'primary'},
  {label: '0', variant: 'default', className: 'col-span-2'},
  {label: '.', variant: 'default'},
  {label: '=', variant: 'primary'},
];

const CalculatorContext = React.createContext();

function CaclculatorProvider({children}) {
  const [history, setHistory] = React.useState([]);
  const historyStorageKey = 'calculator-history';

  function addHistory(operation, result) {
    setHistory((prev) => {
      const updateHistory = [...prev, `${operation} = ${result}`]
    
      let what = localStorage.setItem(historyStorageKey, JSON.stringify(updateHistory));
      console.log(what);
      alert('oi');
      return updateHistory;
    });
  }

  return (
    <CalculatorContext.Provider value={{history, addHistory}}>
      {children}
    </CalculatorContext.Provider>
  )
}

function CalculatorKeyboard({handlerOperation, handlerResult, handlerHistory,...props}) {
  const { addHistory } = React.useContext(CalculatorContext);

  return (
    <div className="grid grid-cols-4 gap-2" {...props}>
      {buttosList.map((button, index) => (
        <Button 
          key={button.label + index} 
          variant={button.variant} 
          className={button.className}
          onClick={() => handlerOperation(prev => {
            if (button.label === 'C') {
              handlerResult(0);
              return '';
            }
            if (button.label === 'CE') return prev.slice(0, -1);
            if (button.label === '=') {
              try {
                if (prev) {
                  handlerResult(eval(prev));
                  addHistory(prev, eval(prev));
                }
              } catch (error) {
                handlerResult('Syntax ERROR');
                console.error('Error in eval(): ', error);
              }
              return prev;
            }
            if (button.label === '.' && !(prev.endsWith('.')))
              return prev + button.label;
            else if (button.label === '.' && prev.endsWith('.'))
              return prev;
            return prev + (isNaN(Number(button.label)) ? ` ${button.label} ` : button.label);
          })}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
}

function CalculatorDisplay({operation, result}) {
  return (
    <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
      <Text variant="muted" className="flex items-center justify-end">
        {operation || '0'}
      </Text>
      <div className="flex items-center justify-between">
        <Text variant="muted" className="flex items-center">=</Text>
        <Text variant="blast" className="flex items-center justify-end">{result}</Text>
      </div>
    </div>
  );
}

function Calculator() {
  const [result, setResult] = React.useState(0);
  const [operation, setOperation] = React.useState('');
  const {history, addHistory} = React.useContext(CalculatorContext);

  return (
    <Card className="flex flex-col gap-[1.625rem] w-[22.75rem] py-12 px-8">
        <CalculatorDisplay operation={operation} result={result} />
        <CalculatorKeyboard handlerOperation={setOperation} handlerResult={setResult}/>
    </Card>
  );
}

function CalculatorHistory() {
  const {history} = React.useContext(CalculatorContext);

  return (
    <Card className="flex flex-col gap-6 py-12 px-8 w-[22.75rem]">
      <Text as='h1' variant="heading" className="underline">History</Text>
      <ul className="flex flex-col gap-3 list-none pl-4 m-0">
        { history.map((item, index) => (
          <Text as='li' key={item + index} className="flex items-center justify-between">{item}</Text>
        ))}
      </ul>
    </Card>
  );
}


function App() {
  return (
    <main className={`flex flex-col sm:flex-row items-center sm:items-stretch sm:gap-3 ${textVariant.default} text-(--text) font-(--font-sans) py-28 px-4`}>
      <CaclculatorProvider>
        <Calculator />
        <CalculatorHistory />
      </CaclculatorProvider>
    </main> 
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
