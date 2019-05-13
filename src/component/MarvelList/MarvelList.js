import React from 'react';
//import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'
const MarvelList = (props) => {
    const characterList = props.data.results.map(() => {
        return(
            <div>
                {characterList}
            </div>    
        )
    })
    return(
       <div>

       </div>
    )
}
/* <li key = {this.props.data.results}>
            <span>{this.props.data.results.name}</span>
// <ul>
//
</li>
//</ul> */
export default MarvelList