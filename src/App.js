import React, { useState } from 'react';
import socketIOClient from 'socket.io-client'
import './App.css';
import Card from './components/Card.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import Spinner from './components/Spinner';
import CountInfo from './components/CountInfo'

const socket = socketIOClient("https://quizhack.glitch.me/");

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function App() {
    const classes = useStyles();

    const [topic, updateTopic] = useState('')
    const [cards, updateCards] = useState([])
    const [card_count, update_card_count] = useState(0)
    const [set_count, update_set_count] = useState(0)
    const [count_state, update_count_state] = useState(0)
    const [spinner_state, update_spinner_state] = useState(0)

    socket.on('cards_update', function(data) {
        updateCards(data.cards)
        update_card_count(data.cards.length)
        update_set_count(data.set_count)
        update_spinner_state(0)
        update_count_state(1)
    })

    const fetch_topic_cards = topic => {
        socket.emit('requesting_cards', {
            topic: topic
        })
        updateCards([])
        update_card_count(0)
        update_set_count(0)
        update_spinner_state(1)
        update_count_state(0)
    }
    
    const get_course_cards = e => {
        e.preventDefault()
        fetch_topic_cards(topic)
    }

    return (
        <div className="App">
            <div className="header">Quizhack</div>
            <div className={classes.margin}></div>
            <form onSubmit={get_course_cards} className="topic_form">
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
            <CountInfo state={count_state} card_count={card_count} set_count={set_count}/>
            <Spinner state={spinner_state}/>
            <div className="flex_container">
                {
                    cards.map((card) => (
                        <Card key={card.id.toString()} prompt={card.prompt} answer={card.answer}></Card>
                    ))
                }
            </div>
        </div>
    );
}

export default App;