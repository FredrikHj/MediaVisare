/* ================================================== Spinner ==================================================
Imports module */
import React from 'react';

// Import CSS rouls
import '../Style/Spinner.scss';

// Import inportant components for the specific page
export let Spinner = (props) => {
    return(
        <section>
            <p className='textPoss'>{props.str}</p> <span className="spinner spinner-dark"></span>
        </section>
    );
}
export default Spinner;
