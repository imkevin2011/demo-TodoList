import {INPUT_CHANGE, ADD_TODO_ITEM, DEL_TODO_ITEM} from './actionType'

const defaultState = {
    inputValue: '',
    list: ['LeBron', 'Harden', 'Butler', 'Antetokumbo']
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type === INPUT_CHANGE) {
        newState.inputValue = action.inputValue
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        if (newState.inputValue !== '') {
            newState.list.push(newState.inputValue)
            return newState
        }
    }
    if (action.type === DEL_TODO_ITEM) {
        newState.list = newState.list.filter((item, index) => action.index !== index)
        return newState
    }
    return newState
}