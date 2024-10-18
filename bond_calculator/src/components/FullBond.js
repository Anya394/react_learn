import React from 'react';
import '../css/FullBond.css';

const FullBond = (props) => {

    return <div className='fullBondBox'>
            <div className='fullBond'>
                <span className='property'>{props.fullBond.name}</span>

                <div className='propertyLine'>
                    <div className='propertyBox'>
                        <label> Дата погашения </label>
                        <span className='property'>{props.fullBond.matDate}</span>
                    </div>
                    
                    <div className='propertyBox'>
                        <label> Купон (%) </label>
                        <span className='property'>{props.fullBond.couponPercent}</span>
                    </div>
                    
                </div>

                <label> Купон </label>
                <div className='propertyLine'>
                    <div className='propertyBox'>
                        <label> Ближайшая дата выплаты </label>
                        <span className='property'>{props.fullBond.couponDate}</span>
                    </div>

                    <div className='propertyBox'>
                        <label> Размер</label>
                        <span className='property'>{props.fullBond.couponValue}</span>
                    </div>

                    <div className='propertyBox'>
                        <label> Частота выплаты </label>
                        <span className='property'>{props.fullBond.couponFrequency}</span>
                    </div>
                </div>

            </div>
        </div>
}

export default FullBond