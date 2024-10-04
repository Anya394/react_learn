import './css/App.css';
import {useState, useEffect} from 'react';
import Bond from './components/Bond';
import XMLParser from 'react-xml-parser';

const App = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [attributes, setItems] = useState([]);
  useEffect(() => {
    fetch("https://iss.moex.com/iss/securities/RU000A108BE7.xml")
      .then(res => res.text())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(new XMLParser().parseFromString(result).children[0].children[1]);
        }
        ,
        (error) => {
          setIsLoaded(true);
          setError(error);
        } 
      )
  }, [])

  

  if (error) {
   return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
        return (
          <div>
            <main>
              <Bond shortname={attributes.children[2].attributes.value} couponpercent={attributes.children[19].attributes.value}/>
            </main>
          </div>
        );
      }

}

export default App;
