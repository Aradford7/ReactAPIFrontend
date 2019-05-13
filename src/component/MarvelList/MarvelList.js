import React from 'react';
//import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'
const MarvelList = (props) => {
    const characterList = props.data.results.map((data) => {
        return(
            <li key = {this.props.data.results}>
            <span>{this.props.data.results.name}</span>
            </li>
        )
    })
    return(
        <ul>
            {characterList}
        </ul>
    )
}

export default MarvelList