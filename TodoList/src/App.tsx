import Text from './components/Text';
import Icon from './components/Icon';
import Badge from './components/Bedge';
import Button from './components/Button';
import XIcon from './assets/icon/x.svg?react';
import './App.css'


function App() {
  return (
    <>
      <div className="text-red-500 flex gap-4">
        <Text>Hello, Vite!</Text>
        <Icon svg={XIcon} animate={false} className="fill-pink-base" />
        <Badge variant="secondary">55</Badge>
        <Badge>2 - 3</Badge>
        <Button icon={XIcon}>Click Me</Button>
      </div>
    </>
  );
}

export default App;
