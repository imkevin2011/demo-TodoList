import {INPUT_CHANGE, ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionType'

export const getInputChangeAction = inputValue => ({
    type: INPUT_CHANGE,
    inputValue
})

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDelTodoItemAction = index => ({
    type: DEL_TODO_ITEM,
    index
})