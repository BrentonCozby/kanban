import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card.jsx'
import { addCard, removeCard } from '../actions/index.js'

class Column extends Component {

    state = {
        cards: []
    }

    componentWillMount() {
        this.setState({
            cards: this.props.cards
        })
    }

    addNewCard = () => {
        const text = window.prompt('What do you need to do today?')
        this.props.addCard(text, this.props.id)
        this.setState({
            cards: this.props.cards
        })
    }

    onDrop = (e) => {
        const text = e.dataTransfer.getData('text')
        const cardId = e.dataTransfer.getData('cardId')
        const fromColumnId = e.dataTransfer.getData('fromColumnId')

        this.props.addCard(text, this.props.id)
        this.props.removeCard(cardId, fromColumnId)
        this.setState({
            cards: this.props.cards
        })
    }

    onDragOver = (e) => {
        e.preventDefault()
    }

    render() {
        const { name, color, cards, id } = this.props

        const nameStyle = {
            backgroundColor: color
        }

        return (
            <div
                className="Column"
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
            >
                <div style={nameStyle} className="Column-name">{name}</div>
                {cards && cards.map(card => (
                    <Card key={card.id} cardId={card.id} columnId={id} text={card.text} />
                ))}
                <button onClick={this.addNewCard} className="add-card">+ Add Card</button>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {

    }
}

export default connect(
    null,
    {
        addCard,
        removeCard
    }
)(Column)
