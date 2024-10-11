import React from 'react';
import XMLParser from 'react-xml-parser';
import {useState} from 'react';

const AddBond = (props) => {
    const [bond, setBond] = useState({
        shortname: "",
        couponpercent: ""
    });

    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState({});
    const [error, setError] = useState(null);
    //const [isLoaded, setIsLoaded] = useState(false);

//ref={(el) => myForm = el}

    const fetchBond = async (bondId) => {
        const res = await fetch(`https://iss.moex.com/iss/securities/${bondId}.xml`);
        if (!res.ok) {
            throw res;
        }
    
        return (await res.text());
    };

    const handlerClick = async () => {
        const responseFetch = await fetchBond(document.getElementById("nameOrTiketBond").value)
        const attributes = new XMLParser().parseFromString(responseFetch).children[0].children[1];
        console.log(attributes.children[2].attributes.value)
        setBond({
            shortname: attributes.children[2].attributes.value,
            couponpercent: attributes.children[19].attributes.value
        })
        props.onAdd(bond)
      };

    return <form >
                <input placeholder="Название или тикет облигации" id='nameOrTiketBond'/>
                <button type="button" onClick={handlerClick}>Добавить</button>
            </form>
}

export default AddBond