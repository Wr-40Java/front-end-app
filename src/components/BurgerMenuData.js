import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import React from "react"

const BurgerMenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Car',
        path: '/cars',
        icon: <AiIcons.AiFillCar />,
        cName: 'nav-text'
    },
    {
        title: 'Tax type',
        path: '/tax_type',
        icon: <FaIcons.FaCashRegister />,
        cName: 'nav-text'
    },
    {
        title: 'Tax',
        path: '/tax',
        icon: <FaIcons.FaCashRegister />,
        cName: 'nav-text'
    },
    {
        title: 'Insurance Company',
        path: '/insurance_company',
        icon: <AiIcons.AiTwotoneInsurance />,
        cName: 'nav-text'
    },
    {
        title: 'Insurance type',
        path: '/insurance_type',
        icon: <AiIcons.AiTwotoneInsurance />,
        cName: 'nav-text'
    },
    {
        title: 'Maintenance history',
        path: '/history',
        icon: <AiIcons.AiOutlineHistory />,
        cName: 'nav-text'
    },
    {
        title: 'Maintenance accident',
        path: '/event',
        icon: <MdIcons.MdMedicalServices />,
        cName: 'nav-text'
    },
    {
        title: 'Technical service',
        path: '/service',
        icon: <MdIcons.MdCleaningServices />,
        cName: 'nav-text'
    }
]
export default BurgerMenuData