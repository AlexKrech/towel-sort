module.exports = function towelSort(matrix) {
    
  if( matrix === undefined ){
    return []
  }
  
  let arr = []

    for (let i = 0; i < matrix.length; i++) {
      if( i % 2 !== 0)
      matrix[i].reverse()
    }


    for (subArr of matrix) {
        for (let i = 0; i < subArr.length; i++) {
            arr.push(subArr[i])
        }
    }

    return arr;
}
