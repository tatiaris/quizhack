import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Options(data) {
    const [uniquify, setUniquify] = useState(false)
    const [sorted, setSorted] = useState(false)
    
    const handleUnique = (event) => {
        setUniquify(event.target.checked)
        data.apply_uniqueness(!uniquify)
    }

    const handleSorted = (event) => {
        setSorted(event.target.checked)
        data.apply_sort(!sorted)
    };

    return (
        <div className="options_container">
            <FormGroup row>
                <FormControlLabel
                    control={<Switch checked={sorted} onChange={handleSorted} name="sorted" />}
                    label="Sort"
                />
                <FormControlLabel
                    control={<Switch checked={uniquify} onChange={handleUnique} name="uniquify" />}
                    label="Unique"
                />
            </FormGroup>
        </div>
    )
}

export default Options
