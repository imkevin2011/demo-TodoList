import React from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { Wrapper, ListWrapper } from './TodoListStyle'
import { getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction } from './store/actionCreator'

const TodoList = (props) => {
    const {inputValue, list, handleInputChange, handleAddTodoItem,handleDelTodoItem} = props
    return (
      <Wrapper>
        <h1>TodoList</h1>
        <Input
          placeholder='add todo item'
          style={{width:'300px',marginRight:'10px',borderRadius:'30px'}}
          value={inputValue}
          onChange={handleInputChange}
        ></Input>
        <Button
          type='primary'
          onClick={handleAddTodoItem}
        >Add</Button>
        <ListWrapper>
          <List
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item className='list-item'>{item} 
                <Button className='del-btn' type='ghost' onClick={()=>handleDelTodoItem(index)}>DEL</Button>
              </List.Item>)}
          ></List>
        </ListWrapper>
      </Wrapper>
    )
}

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list
})

const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    dispatch(action)
  },
  handleAddTodoItem() {
    const action = getAddTodoItemAction()
    dispatch(action)
  },
  handleDelTodoItem(index) {
    const action = getDelTodoItemAction(index)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
