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
  );
}

function Button({children, variant='blue', ...props}) {
  return (
    <button className={`${buttonVariants[variant]} text-white font-bold py-2 px-4 m-1 rounded w-full`} {...props}>
      {children}
    </button>
  );
}

const FormContext = React.createContext();

function FormProvider({children}) {
  const [users, setUsers] = React.useState([]);

  const addUser = (username) => {
    setUsers(prev => ([...prev, username]));
  };

  return (
    <FormContext.Provider value={{users, addUser}}>
      {children}
    </FormContext.Provider>
  );
}

function UserTable() {
  const {users} = React.useContext(FormContext);

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Form() {
  const {users, addUser} = React.useContext(FormContext);
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    if (users.length > 0) {
      alert(`New user added: ${users[users.length - 1]}`);
    }
  }, [username]);
  
  return (
    <div className="bg-white px-8 pt-6 pb-8 mb-4 w-full">
      <Input label="Username" type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <div className="flex flex-col items-center align-center">
        <Button onClick={() => addUser(username)}>Regist</Button>
        <Button variant="black">Reset</Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 className="font-medium text-2xl text-center my-4 font-bold">
        Welcome to JSX World
      </h1>
      <FormProvider>
        <Form />
        <UserTable />
      </FormProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
