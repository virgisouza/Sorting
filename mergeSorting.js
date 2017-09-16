console.log('sanity check');

var data = [3,2,6,8,5];

function mergeSort(arr){
  //define base case
  if(arr.length === 1){
    return;
  }
  var leftArr = [];
  var rightArr = [];
  //divide array in half **
  if(arr.length % 2 === 0){ //even numbered array
    leftArr = data.slice(0, (arr.length/2));
    rightArr = data. slice((arr.length/2), (arr.length));
  }else{//odd numbered array
    leftArr = data.slice(0, (Math.floor(arr.length/2)));
    rightArr = data.slice((Math.floor(arr.length/2)), (arr.length));
  }
  ////note: with this conditional statement: leftArr will ALWAYS be an even length
  ///and rightArr will ALWAYS be odd length
  /*
    At this point:

    leftArr = [3,2];
    rightArr = [6,8,5];

  */
  leftArr

mergeSort();