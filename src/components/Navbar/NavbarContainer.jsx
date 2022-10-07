import React from 'react'
import Navbar from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        links: state.staticPages.links
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;



