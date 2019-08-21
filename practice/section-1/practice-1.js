'use strict';

function find(collection, element) {

  for (let i = 0; i < collection.length; i++) {
    if(collection[i]===element){
     return collection[i];
    }
  }
  return '无此参数';
}

