import * as types from '../constants/ActionTypes'

/*export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

*/
export const showListIcon = (iconList) => ({type:types.SHOW_ALL_ICON,payload:iconList})
export const onClickCheckIcon = (idx) => ({type:types.SELECTED_ICON,payload:idx})
export const onmousedown = (parent_id,idx)=>({type:types.CHECK_ICON_DOWN,parent_id,idx})
export const onmouseup = (parent_id,idx)=>({type:types.CHECK_ICON_UP,parent_id,idx})
export const onmouseover = (parent_id,idx)=>({type:types.CHECK_ICON_OVER,parent_id,idx})
export const checkValueRadio = (event)=>({type:types.CHECK_BOX,payload:event})
export const showCode = ()=>({type:types.SHOW_CODE})