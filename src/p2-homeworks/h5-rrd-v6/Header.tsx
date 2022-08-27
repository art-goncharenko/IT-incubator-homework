import React from 'react'
import {NavLink, Route, Routes} from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink style={(params) => {
                return {color: params.isActive ? '#0074D9' : 'black'}
            }} to={'/PreJunior'}>Pre-Junior</NavLink>
            <NavLink style={(params) => {
                return {color: params.isActive ? '#0074D9' : 'black'}
            }} to={'/Junior'}>Junior</NavLink>
            <NavLink style={(params) => {
                return {color: params.isActive ? '#0074D9' : 'black'}
            }} to={'/JuniorPlus'}>Junior +</NavLink>

            <Routes>
                <Route path={'/PreJunior'} element={<div>Pre-Junior</div>}/>
                <Route path={'/Junior'} element={<div>Junior</div>}/>
                <Route path={'/JuniorPlus'} element={<div>Junior +</div>}/>
            </Routes>
        </div>
    )
}

export default Header
