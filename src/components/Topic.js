import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

function Topic(helper) {
    const [topic, updateTopic] = useState('')

    const handle_submit = e => {
        e.preventDefault()
        helper.fetch_topic_cards(topic)
    }

    return (
        <form onSubmit={e => handle_submit(e)} className="topic_form">
            <div>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <CollectionsBookmarkIcon />
                    </Grid>
                    <Grid item>
                        <TextField required onChange={e => updateTopic(e.target.value)} id="input-with-icon-grid" label="Topic" />
                    </Grid>
                </Grid>
            </div>
        </form>
    )
}

export default Topic