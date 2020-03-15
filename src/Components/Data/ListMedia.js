import React, { useState, useEffect } from 'react';
export const ListMedia = (props) => {
    const { styleStart, styleEnd, ListData } = props;
    return(
        styleStart
            {(ListData !== undefined)
                ? (ListData.length !== 0) 
                    ? ListData.map((item, index) => {  
                        console.log("TCL: HomeImages -> item", item)
                        return(
                            <StyleHomeImages.iconMeasurement key={ index }>
                                <img src={ serverUrl + item} alt="erge" height="80"/>
                            </StyleHomeImages.iconMeasurement>
                        );
                    })
                    : 'Finns inga bilder'
                : null
            }
        styleEnd
    );
}
