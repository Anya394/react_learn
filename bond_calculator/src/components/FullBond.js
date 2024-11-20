import React from 'react';
import '../css/FullBond.css';
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx"

const FullBond = (props) => {

    return <div className='fullBondBox'>
            <div className='fullBond'>

                <div className='propertyLine'>
                    <span className='property name'>{props.fullBond.name}</span>
                </div>

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

                <div className='propertyLine'>
                    <label className='lineLable'>Купоны</label>
                </div>

                <div className='propertyLine'>
                    <div className='propertyBox'>
                        <label> Ближайшая дата выплаты </label>
                        <span className='property'>{props.fullBond.couponDate}</span>
                    </div>

                    <div className='propertyBox'>
                        <label> Размер (руб.)</label>
                        <span className='property'>{props.fullBond.couponValue}</span>
                    </div>

                    <div className='propertyBox'>
                        <label> Частота выплаты </label>
                        <span className='property'>{props.fullBond.couponFrequency} в год</span>
                    </div>
                </div>

                <div className='propertyLine edit'>
                    <div className='propertyBox'>
                        <label> Количество </label>
                        <span className='property'>{props.fullBond.buyCount}</span>
                    </div>
                    
                    <div className='propertyBox'>
                        <label> Средняя цена </label>
                        <span className='property'>{props.fullBond.averagePrice}</span>
                    </div>
                    
                </div>

                <div className='buttonLine'>
                    <div className='button edit'>
                        Редактировать
                        <CiEdit className='iconButton' onClick={(e) => {
                            
                        }}/>
                    </div>
                    
                    <div className='button delete'>
                        Удалить
                        <RxCross2 className='iconButton'/>
                    </div>
                    
                </div>

            </div>
        </div>
}

export default FullBond