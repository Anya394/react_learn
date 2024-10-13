import React from 'react';
import XMLParser from 'react-xml-parser';
import '..\\src\\css\\AddBond.css';

const AddBond = (props) => {
    //const [error, setError] = useState(null);
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
            couponpercent: attributes.children[19].attributes.value
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