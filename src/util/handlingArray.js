export function loopArray(listIcon) {
  var arryList = [];
  for(let i = 0;i<listIcon.length;i++){
    if(listIcon[i].image !== undefined){
      listIcon[i].code = splitString(listIcon[i].code);
      arryList.push(listIcon[i]);
    }
  }
  return arryList.splice(0,88);
}

function splitString(stringCode){
    let str = stringCode.split(" ");
    let getstr = "";
    for(let i = 0;i<str.length;i++){
      getstr = str[i].replace(/\s+/g, '');
    }
    return getstr;
}


export function remove_active_class(arr){
  if(arr.length > 0){
    for(let i = 0;i < arr.length;i++){
      arr[i].classList.remove("active");
    }
  }
}

export function putValueToArr(image,code,x,y){
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

export function getCodeIncon(stringCode){
   let str = stringCode.split(" ");
    let getstr = "";
    for(let i = 0;i<str.length;i++){
      getstr = str[i].replace(/\s+/g, '');
    }
    return getstr; 
}



export function getStringCodeFromList(listConverSkype){
  var str = "";
  for(let i = 0;i<listConverSkype.length ; i++){
      for(let j = 0 ;j<listConverSkype[i].length;j++){
          str += listConverSkype[i][j].code;
      }
      str += "\n";
  }
  return str;
}


function copySelectionText(){
    var copysuccess // var to check whether execCommand successfully executed
    try{
        copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}

export function copyfieldvalue(id){
    var field = document.getElementById(id)
    field.focus()
    field.setSelectionRange(0, field.value.length)
    copySelectionText();
    
}