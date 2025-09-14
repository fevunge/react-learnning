import Text from './components/Text';
import Icon from './components/Icon';
import Badge from './components/Bedge';
import Button from './components/Button';
import ButtonIcon from './components/ButtonIcon';
import XIcon from './assets/icon/x.svg?react';
import TrashIcon from './assets/icon/trash.svg?react';
import PencilIcon from './assets/icon/pencil.svg?react';
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
        <ButtonIcon icon={XIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={PencilIcon} />
      </div>
    </>
  );
}

export default App;
