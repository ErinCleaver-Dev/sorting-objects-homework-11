var books = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  },
  {
    title: "10X",
    author: "Grant Cardone",
    libraryID: 3945
  }
];

const merge = (leftSide, rightSide, type) => {
  results = [];
  
  while (leftSide.length && rightSide.length) {
    if(leftSide[0][type] <= rightSide[0][type]) {
      results.push(leftSide.shift(0))
      
    } else {
      results.push(rightSide.shift(0))
    }
  }
  console.log(results)
  return results
}

const mergeSort = (array, type) => {
  middle = Math.ceil(array.length/2) 
  if(array.length == 1) {
    return array
  }


  return merge(
    mergeSort(
      array.slice(0, middle), 
      type), 
      mergeSort(array.slice(middle), 
      type), 
      type)
}

const bubble = (array, type) => {
  

}

var sortBooksByID = function(arr) {
  // sort books

  return arr;
};

var sortBooks = function(arr, type) {
  // sort books

  return arr;
};

console.log(mergeSort(books, "libraryID"))