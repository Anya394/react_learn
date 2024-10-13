import React from 'react';
import '../css/Bond.css';
import { BsChevronCompactDown } from "react-icons/bs"; //вниз
// import { BsChevronCompactUp } from "react-icons/bs"; вверх
// import { FiEdit3 } from "react-icons/fi"; карандаш
// import { CiEdit } from "react-icons/ci"; карандаш лучше
// import { RxCross2 } from "react-icons/rx"; крест
// import { RiEyeCloseFill } from "react-icons/ri"; глаз закрыт
// import { PiEyeClosed } from "react-icons/pi"; глаз закрыт проще
// import { IoEyeOutline } from "react-icons/io5"; глаз открыт
// import { IoEyeOffOutline } from "react-icons/io5"; глаз зачёркнут
// import { RxEyeOpen } from "react-icons/rx"; глаз открыт со зрачком

const Bond = (props) => {
    return <div className='bondBox'>
        <div className='bond'>
            <span className='shortname'>{props.bond.shortname}</span>
            <span className='couponpercent'>{props.bond.couponpercent}</span>
            <BsChevronCompactDown />
        </div>
    </div>
}

export default Bond