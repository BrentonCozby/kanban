import React from 'react'

const Card = ({ text, cardId, columnId }) => {

    const onDragStart = function(e) {
        e.dataTransfer.setData('text', text)
        e.dataTransfer.setData('cardId', cardId)
        e.dataTransfer.setData('fromColumnId', columnId)
    }

    return (
        <div
            className="Card"
            draggable="true"
            onDragStart={onDragStart}
        >
            <p className="text">{text}</p>
        </div>
    )
}

export default Card
