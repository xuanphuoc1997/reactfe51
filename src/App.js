import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from './components/DemoStateless';
import DemoStateFul from './components/DemoStateFul';
import BaiTapLayout1 from './components/BaitaplayoutCombonent/BaiTapLayout1';
import Databinding from './Datasbinding/Databinding';
import HandleEvent from './components/HandleEvent.js/HandleEvent';
function App() {
  return (
<div className="App">
  {/* <DemoStateless/>
  <DemoStateFul/> */}
  {/* <BaiTapLayout1/> */}
  <Databinding />
  <HandleEvent />
</div>
  );
}

export default App;
