const INITAL_STATE = {
    all: []
}

export default function(state = INITAL_STATE, action) {
    switch(action.type) {
        case 'GET_ALL_COLUMNS':
            return {...state, all: action.payload}
        case 'ADD_CARD':
            const { text, toColumnId } = action.payload
            const newAllAdd = [...state.all]
            newAllAdd.forEach(column => {
                 if(column.id === toColumnId) {
                     column.cards.push({
                         id: Math.random(), // database would generate this,
                         text
                     })
                 }
            })
            return {...state, all: newAllAdd}
        case 'REMOVE_CARD':
            const { cardId, fromColumnId } = action.payload
            const newAllRemove = [...state.all]
            newAllRemove.forEach(column => {
                if(+column.id === +fromColumnId) {
                    column.cards = column.cards.reduce((prevCard, currCard) => {
                        if(+currCard.id === +cardId) return prevCard
                        prevCard.push(currCard)
                        return prevCard
                    }, [])
                }
            })
            return {...state, all: newAllRemove}
        default:
            return state
    }
}
