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
    if(left[0][type] <= right[0][type]) {
      console.log(left[0][type])
      results.push(left.shift(0))
      
    } else {
      results.push(right.shift(0))
    }
  }

  return results
}

const mergeSort = (array, type) => {
  middle = Math.ceil(array.length/2) 
  if(array.length == 1) {
    return array
  }


  return merge(mergeSort(array.slice(middle)), array, type)
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

mergeSort(books, "libraryID")