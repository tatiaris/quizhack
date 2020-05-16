import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


function Spinner(info) {

    if (info.state === 0){
        return (
            <div></div>
        )
    } else {
        return (
            <div className="progress_container">
                <CircularProgress/>
            </div>
        )
    }
}

export default Spinner
