import './css/App.css';
import {useState} from 'react';
import Bonds from './components/Bonds';
import AddBond from './components/AddBond';

const App = (props) => {
  const [bonds, setBonds] = useState({bonds: [
    {
      shortname: "",
      couponpercent: ""
    }
  ]});

  const addBond = (bond) => {
    setBonds({ bonds: [...bonds, {...bond}]})
  }

  return (
    <div className='App'>
      <main className='list'>
        <AddBond onAdd={addBond}/>
        <Bonds bonds={bonds}/>
      </main>
    </div>
);
}

export default App;
