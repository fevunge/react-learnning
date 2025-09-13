const buttonVariants = {
  blue: 'bg-blue-500',
  black: 'bg-black',
};

function Input({label, type, ...props}) {
  return (
    <div className="m-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input type={type} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...props} />
    </div>
  )
}

function Button({children, variant='blue', ...props}) {
  return (
    <button className={`${buttonVariants[variant]} text-white font-bold py-2 px-4 m-1 rounded w-full`} {...props}>
      {children}
    </button>
  );
}

function Form() {
  return (
    <form className="bg-white px-8 pt-6 pb-8 mb-4 w-full">
      <Input label="Username" type="text" placeholder="Enter your username" />
      <Input label="Password" type="password" placeholder="Enter your password" />
      <div className="flex flex-col items-center align-center">
        <Button>Login</Button>
        <Button variant="black">Sign Up</Button>
      </div>
    </form>
  );
}

function App() {
  return (
    <>
      <h1 className="font-medium text-2xl text-center my-4 font-bold">
        Welcome to JSX World
      </h1>
      <Form />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
