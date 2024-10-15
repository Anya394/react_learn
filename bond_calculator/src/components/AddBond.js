import React from 'react';
import XMLParser from 'react-xml-parser';
import '..\\src\\css\\AddBond.css';

const AddBond = (props) => {
    //const [error, setError] = useState(null);
    //const [isLoaded, setIsLoaded] = useState(false);

//ref={(el) => myForm = el}

    const fetchBond = async (bondId) => {
        const res = await fetch(`https://iss.moex.com/iss/securities/${bondId}.xml`); // RU000A108BE7
        if (!res.ok) {
            throw res;
        }
    
        return (await res.text());
    };

    const handlerClick = async () => {
        let value = document.getElementById("nameOrTiketBond").value;
        if (Object.keys(value).length === 0)
        {
            console.log("input был пустым")
            return;
        }
        const responseFetch = await fetchBond(document.getElementById("nameOrTiketBond").value)
        const attributes = new XMLParser().parseFromString(responseFetch).children[0].children[1];
        if (attributes.children.length === 0)
        {
            console.log("В input введено некорректное значение")
            return;
        }
        props.onAdd({
            shortname: attributes.children[2].attributes.value,
            name: attributes.children[1].attributes.value,
            matDate: attributes.children[6].attributes.value,
            couponValue: attributes.children[20].attributes.value,
            couponPercent: attributes.children[19].attributes.value,
            faceValue: attributes.children[15].attributes.value,
            couponFrequency: attributes.children[17].attributes.value,
            couponDate: attributes.children[18].attributes.value
        });
    };

    return <div className='divFormAdd'>
            <form className='formAdd'>
                <input className='inputAdd' placeholder="Название или тикет облигации" id='nameOrTiketBond'/>
                <button className='buttonAdd' type="button" onClick={handlerClick}>Добавить</button>
            </form>
        </div>
}

export default AddBond