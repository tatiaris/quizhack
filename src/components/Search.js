import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

function Search(helper) {
    if (helper.state) {
        return (
            <Grid className="flex_center" container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SearchIcon/>
                </Grid>
                <Grid item>
                    <TextField onChange={e => helper.apply_search(e.target.value)} id="input-search" label="" />
                </Grid>
            </Grid>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Search
