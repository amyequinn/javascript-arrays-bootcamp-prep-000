
var chocolateBars=["snickers", "hundred grand", "kitat", "skittles"];

function addElementToBeginningOfArray(){
var addElementToBeginningOfArray = [1];
addElementToBeginningOfArray.unshift("foo");
return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(){
  const destructivelyAddElementToBeginningOfArray = [1];
  const one = ["foo", ...destructivelyAddElementToBeginningOfArray];
  return one

}
