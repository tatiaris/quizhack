import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client'
import Header from './components/Header'
import Topic from './components/Topic'
import Cards from './components/Cards'
import Spinner from './components/Spinner';
import CountInfo from './components/CountInfo'
import Options from './components/Options'
import Search from './components/Search'
import Footer from './components/Footer'
import './App.css';

let socket

function App() {
    const [cards, updateCards] = useState([])
    const [unsorted_cards, update_unsorted_cards] = useState([])
    const [sorted_cards, update_sorted_cards] = useState([])
    const [card_count, update_card_count] = useState(0)
    const [set_count, update_set_count] = useState(0)
    const [count_state, update_count_state] = useState(0)
    const [search_state, update_search_state] = useState(false)
    const [spinner_state, update_spinner_state] = useState(0)
    const [unique, update_unique] = useState(false)
    const [sorted, update_sorted] = useState(false)
    const [footer_state, change_footer_state] = useState('empty')
    const [search_phrase, update_search_phrase] = useState('')

    useEffect(() => {
        socket = socketIOClient("https://quizhack-backend.glitch.me/");
        socket.on('cards_update', function(data) {
            updateCards(data.cards)
            update_sorted_cards(data.sorted_cards)
            update_unsorted_cards(data.unsorted_cards)
            update_card_count(data.card_count)
            update_set_count(data.set_count)
            update_spinner_state(0)
            update_count_state(1)
            change_footer_state('full')
            update_search_state(true)
        })
    }, [])

    const fetch_topic_cards = topic => {
        socket.emit('requesting_cards', {
            topic: topic,
            sorted: sorted,
            unique: unique
        })
        updateCards([])
        update_card_count(0)
        update_set_count(0)
        update_spinner_state(1)
        update_count_state(0)
        change_footer_state('empty')
        update_search_state(false)
        update_search_phrase('')
    }

    const apply_sort = sort_state => {
        update_sorted(sort_state)
        if (sort_state) {
            updateCards(sorted_cards)
        } else {
            updateCards(unsorted_cards)
        }
    }

    const apply_uniqueness = uniquify => {
        let new_cards = []
        if (uniquify) {
            for (let i = 0; i < cards.length; i++) {
                new_cards.push(cards[i])
                new_cards[i].display = new_cards[i].unique
                sorted_cards[i].display = sorted_cards[i].unique
                unsorted_cards[i].display = unsorted_cards[i].unique
            }
        } else {
            for (let i = 0; i < cards.length; i++) {
                new_cards.push(cards[i])
                new_cards[i].display = true
                sorted_cards[i].display = true
                unsorted_cards[i].display = true
            }
        }
        update_unique(uniquify)
        updateCards(new_cards)
    }

    return (
        <div className="App">
            <Header/>
            <Topic fetch_topic_cards={fetch_topic_cards}/>
            <CountInfo state={count_state} card_count={card_count} set_count={set_count}/>
            <Options apply_sort={apply_sort} apply_uniqueness={apply_uniqueness}/>
            <Search state={search_state} apply_search={update_search_phrase}/>
            <Spinner state={spinner_state}/>
            <Cards cards={cards} search_phrase={search_phrase}/>
            <Footer status={footer_state}/>
        </div>
    );
}

export default App;