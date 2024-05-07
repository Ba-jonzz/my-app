import './App.css';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import Tabs from './Tab';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Calendar from './Calandar';



function App() {

  const tabs = [
    {
      label: 'Tab 1',
      content: 'Tab 1 content',
    },
    {
      label: 'Tab 2',
      content: 'Tab 2 content',
    },
    {
      label: 'Tab 3',
      content: 'Tab 3 content',
    },
  ];

  return (
    <div className="app">
      <Calendar />
    {/*   <MyComponent />
      <Tippy content={<Tabs items={tabs} />}   interactive={true} className='tippy-container'>
        <span>ddddd</span>
      </Tippy> */}
    </div>
  );
}


function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <div>

    </div>
  )
}


export default App;
