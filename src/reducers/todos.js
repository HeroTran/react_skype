import {SHOW_ALL_ICON,SELECTED_ICON,CHECK_ICON_DOWN,CHECK_ICON_UP,
CHECK_ICON_OVER,CHECK_BOX,SHOW_CODE,CHECK_OK} from '../constants/ActionTypes'

import * as handlingArray from '../util/handlingArray'



const initialState = {
  listIcon:[],
  check:false,
  image_current:"https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/kiss_80_anim_gif.gif?width=40&height=40",
  code_current:":-*",
  idx: "",
  listConverSkype:[],
  valueCode:"",
  checkCode:true,
  x:15,
  y:15
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_ICON:
      var newlistConverSkype = handlingArray.putValueToArr(state.image_current,state.code_current , state.x,state.y);
      //set localStorage for radio button
      localStorage.setItem("localIcon15",JSON.stringify({
        arr:newlistConverSkype
        })
      );
      localStorage.setItem("localIcon20",JSON.stringify({
        arr:handlingArray.putValueToArr(state.image_current,state.code_current , 20,20)
        })
      );
      return {...state, listIcon:action.payload,listConverSkype:newlistConverSkype,check:false};
    case SELECTED_ICON:
      let img = document.getElementsByTagName("li")[action.payload].children[0].src;
      let code = handlingArray.getCodeIncon(document.getElementsByTagName("li")[action.payload].children[0].getAttribute('data-code'));
      handlingArray.remove_active_class(document.querySelectorAll("li.active"));
      document.getElementsByTagName("li")[action.payload].className = ' active';
      return {...state, idx: action.payload,image_current:img,code_current:code,check:false};
    case CHECK_ICON_DOWN:
      console.log("CHECK_ICON_DOWN");
          const listConverSkype = state.listConverSkype.map((child, parentIdx) => {
          if(parentIdx !== action.payload.parent_id) return child;
            return child.map((c, childId) => {
              if(childId !== action.payload.idx) return c;
              return {
                code: state.code_current,
                image: state.image_current
              };
            })
          });
          if(state.x === 15){
            localStorage.setItem("localIcon15",JSON.stringify({
              arr:listConverSkype
              })
            );
          }else{
            localStorage.setItem("localIcon20",JSON.stringify({
              arr:listConverSkype
              })
            );
          }
          return {
            ...state,
            listConverSkype:listConverSkype,
            check:true
          };
      
      
      
    case CHECK_ICON_UP:
        
      return {...state,check:false};
    case CHECK_ICON_OVER:
      if(state.check){
        const listConverSkype = state.listConverSkype.map((child, parentIdx) => {
        if(parentIdx !== action.payload.parent_id) return child;
          return child.map((c, childId) => {
            if(childId !== action.payload.idx) return c;
            return {
              code: state.code_current,
              image: state.image_current
            };
          })
        });
        if(state.x === 15){
            localStorage.setItem("localIcon15",JSON.stringify({
              arr:listConverSkype
              })
            );
          }else{
            localStorage.setItem("localIcon20",JSON.stringify({
              arr:listConverSkype
              })
            );
          }
        return {
          ...state,
          listConverSkype:listConverSkype

        };
      }
      return {
          ...state,
          check:false

        };
    case CHECK_BOX:
        var localIcon ;
        if(action.payload === "15" ){
          state.x = 15;
          state.y = 15;
          localIcon = JSON.parse( localStorage.getItem("localIcon15") );
          
        }else{
          state.x = 20;
          state.y = 20;
          localIcon = JSON.parse( localStorage.getItem("localIcon20"))
        }
      return {...state, listConverSkype:localIcon.arr,check:false};
    case SHOW_CODE:
      let valueCode = handlingArray.getStringCodeFromList(state.listConverSkype);
      let check = valueCode === "" ? true : false;
      return {...state,valueCode:valueCode,checkCode:check,check:false};
    case CHECK_OK:
      if(state.x === 15 ){
          localStorage.setItem("localIcon15",JSON.stringify({
            arr:handlingArray.putValueToArr("https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/kiss_80_anim_gif.gif?width=40&height=40",
          ":-*" , state.x,state.x)
            })
          );
        }else{
          localStorage.setItem("localIcon20",JSON.stringify({
            arr:handlingArray.putValueToArr("https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/kiss_80_anim_gif.gif?width=40&height=40",
          ":-*" , state.x,state.x)
            })
          );
        }
        return {...state,listConverSkype:handlingArray.putValueToArr("https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/kiss_80_anim_gif.gif?width=40&height=40",
          ":-*" , state.x,state.x)
          ,valueCode:"",checkCode:true,check:false};

    default:
      return state
  }
}










