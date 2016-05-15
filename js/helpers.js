var transpose = function(array){
  return array[0].map(function(col, i) { 
    return array.map(function(row) { 
      return row[i] 
    })
  });
}

function removeZeros(section) {
 return section.filter(function(number){
   return number != "0"
 });
}

function turnToInteger(array){
  var passedArray = array;
  var integerArray = []
  passedArray.forEach(function(number) {
    integerArray.push(parseInt(number))
  });
  return integerArray; 
}
