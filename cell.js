function CalcExcitedCells(arr, k) {

    var step;
    for (step = k; step > 0; step--) {
      var next = [];

        for (var i = 0; i < arr.length; i++) {
          
          let left = i == 0 ? arr[arr.length - 1] : arr[i-1];
          let right = i == (arr.length - 1) ? arr[0] : arr[i+1];

          if (( left && !right ) || ( !left && right ) ) {
              next.push(1);
          } else {
          next.push(0);
          }
      }
      console.log(arr);
          arr = [...next];
          
    }
          return next;    
  }
  
  console.log(CalcExcitedCells([1,0,1,1], 2)); 