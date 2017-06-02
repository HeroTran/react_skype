import * as types from '../constants/ActionTypes'


export const showListIcon = (iconList) => ({type:types.SHOW_ALL_ICON,payload:iconList})
export const onClickCheckIcon = (idx) => ({type:types.SELECTED_ICON,payload:idx})
export const onmousedown = (parent_id,idx)=>({type:types.CHECK_ICON_DOWN,payload: {
    parent_id: parent_id,
    idx: idx
  } })
export const onmouseup = (parent_id,idx)=>({type:types.CHECK_ICON_UP,payload: {
    parent_id: parent_id,
    idx: idx
  } })
export const onmouseover = (parent_id,idx)=>({type:types.CHECK_ICON_OVER,payload: {
    parent_id: parent_id,
    idx: idx
  } })
export const checkValueRadio = (payload)=>({type:types.CHECK_BOX,payload})
export const showCode = ()=>({type:types.SHOW_CODE})
export const onClickOk = (payload)=>({type:types.CHECK_OK,payload})


//export const onmousemove = (parent_id,idx)=>({type:types.CHECK_ICON_MOVE,parent_id,idx})
//export const onmouseout = (parent_id,idx)=>({type:types.CHECK_ICON_OUT,parent_id,idx})
