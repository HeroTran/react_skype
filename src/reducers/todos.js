import {SHOW_ALL_ICON,SELECTED_ICON,CHECK_ICON_DOWN,CHECK_ICON_UP,CHECK_ICON_MOVE,CHECK_ICON_OUT,
CHECK_ICON_OVER,CHECK_BOX,SHOW_CODE} from '../constants/ActionTypes'


const initialState = {
  listIcon:[],
  check:false,
  image_current:"https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/kiss_80_anim_gif.gif?width=40&height=40",
  code_current:":-*",
  idx: " ",
  listConverSkype:[],
  valueCode:"",
  checkCode:true,
  x:15,
  y:15
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_ICON:
      var newlistConverSkype = putValueToArr(state.image_current,state.code_current , state.x,state.y);
      //set localStorage for radio button
      localStorage.setItem("localIcon15",JSON.stringify({
        arr:newlistConverSkype
        })
      );
      localStorage.setItem("localIcon20",JSON.stringify({
        arr:putValueToArr(state.image_current,state.code_current , 20,20)
        })
      );
      return {...state, listIcon:action.payload,listConverSkype:newlistConverSkype,check:false};
    case SELECTED_ICON:
      let img = document.getElementsByTagName("li")[action.payload].children[0].src;
      let code = getCodeIncon(document.getElementsByTagName("li")[action.payload].children[0].getAttribute('data-code'));
      remove_active_class(document.querySelectorAll("li.active"));
      document.getElementsByTagName("li")[action.payload].className = ' active';
      return {...state, idx: action.payload,image_current:img,code_current:code,check:false};
    case CHECK_ICON_DOWN:
      console.log("CHECK_ICON_DOWN");
      
        return {
          ...state,
          check:true

        };
      
    case CHECK_ICON_UP:
        console.log("CHECK_ICON_UP");
        if(state.check){
          const listConverSkype = state.listConverSkype.map((child, parentIdx) => {
          if(parentIdx !== action.parent_id) return child;
            return child.map((c, childId) => {
              if(childId !== action.idx) return c;
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
            check:false
          };
      }
      
      
      return {...state,check:true};
    case CHECK_ICON_OVER:
      if(state.check){
        const listConverSkype = state.listConverSkype.map((child, parentIdx) => {
        if(parentIdx !== action.parent_id) return child;
          return child.map((c, childId) => {
            if(childId !== action.idx) return c;
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
    case CHECK_ICON_MOVE:
      console.log("CHECK_ICON_MOVE");
      
      
      
    case CHECK_ICON_OUT:
      return {...state,check:false};
    case CHECK_BOX:
        var localIcon ;
        if(action.payload.target.value === "15" ){
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
      let valueCode = getStringCodeFromList(state.listConverSkype);
      let check = valueCode === "" ? true : false;
      return {...state,valueCode:valueCode,checkCode:check,check:false};

    default:
      return state
  }
}












function remove_active_class(arr){
  if(arr.length > 0){
    for(let i = 0;i < arr.length;i++){
      arr[i].classList.remove("active");
    }
  }
}

function putValueToArr(image,code,x,y){
  var matrix = [];
  for(var i=0; i<x; i++) {
      matrix[i] = [];
      for(var j=0; j<y; j++) {
          matrix[i][j] = {
            image,
            code
          };
      }
  }
  return matrix;
}

function getCodeIncon(stringCode){
   let str = stringCode.split(" ");
    let getstr = "";
    for(let i = 0;i<str.length;i++){
      getstr = str[i].replace(/\s+/g, '');
    }
    return getstr; 
}



function getStringCodeFromList(listConverSkype){
  var str = "";
  for(let i = 0;i<listConverSkype.length ; i++){
      for(let j = 0 ;j<listConverSkype[i].length;j++){
          str += listConverSkype[i][j].code;
      }
  }
  return str;
}