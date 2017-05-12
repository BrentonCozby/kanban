import columns from '../../data.js'

if(!localStorage.getItem('columns')) {
    localStorage.setItem('columns', JSON.stringify(columns))
}

export function getAllColumns() {
    return dispatch => {
        const columnsData = JSON.parse(localStorage.getItem('columns'))
        dispatch({
            type: 'GET_ALL_COLUMNS',
            payload: columnsData
        })
    }
}

export function addCard(text, toColumnId) {
    return {
        type: 'ADD_CARD',
        payload: { text, toColumnId }
    }
}

export function removeCard(cardId, fromColumnId) {
    return {
        type: 'REMOVE_CARD',
        payload: { cardId, fromColumnId }
    }
}
