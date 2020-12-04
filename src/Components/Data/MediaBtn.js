/* ================================================== HeadBar ==================================================
Imports module */
import React from 'react';

// Import style
import { HeaderStyle } from '../Style/HeaderStyle';

// Import inportant components for the specific page

export let MediaBtn = (props) => {
    const {btnOptional, onClickFunction, btnName, id } = props;
    return(
        <>
            <HeaderStyle.mediaBtnHomeMovies data-optional={ btnOptional } id={ id } onClick={ onClickFunction }>{ btnName }</HeaderStyle.mediaBtnHomeMovies>
        </>
    );
}