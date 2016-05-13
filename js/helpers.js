var transpose = function(array){
  return array[0].map(function(col, i) { 
    return array.map(function(row) { 
      return row[i] 
    })
  });
}