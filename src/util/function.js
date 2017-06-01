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

