import * as types from '../constants/ActionTypes'


export const showListIcon = (iconList) => ({type:types.SHOW_ALL_ICON,payload:iconList})
export const onClickCheckIcon = (idx) => ({type:types.SELECTED_ICON,payload:idx})
export const onmousedown = (parent_id,idx)=>({type:types.CHECK_ICON_DOWN,parent_id,idx})
export const onmouseup = (parent_id,idx)=>({type:types.CHECK_ICON_UP,parent_id,idx})
export const onmousemove = (parent_id,idx,event)=>({type:types.CHECK_ICON_MOVE,parent_id,idx,event})
export const onmouseout = (parent_id,idx)=>({type:types.CHECK_ICON_OUT,parent_id,idx})
export const onmouseover = (parent_id,idx)=>({type:types.CHECK_ICON_OVER,parent_id,idx})
export const checkValueRadio = (event)=>({type:types.CHECK_BOX,payload:event})
export const showCode = ()=>({type:types.SHOW_CODE})
export const onClickOk = () => ({type:types.CHECK_OK})