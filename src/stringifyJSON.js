// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var stringified = ''; // js returns a string; initiate string to ''

  // if not collection llike objects string obj

  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'undefined' || obj === null){
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (typeof obj === 'function' || typeof obj === 'undefined'){
    return 'undefined';
  } else if (Array.isArray(obj)){ // handles functions and undefined not in fuctions
    // start opening of array
    stringified += '[';

    // iteratethough the array
    for (var i = 0; i < obj.length; i++) {
      //if last oject in array stringify object
      if (typeof obj[i] === 'function' || typeof obj[i] === 'undefined') {
        stringified += 'null'; // if  par doesnt exit or function OMIT
      } else if (i === obj.length -1) {
        stringified += stringifyJSON(obj[i]);
      } else {
      // if not striginfy and add comma
      stringified += stringifyJSON(obj[i]) +',';
      }
    }

    //return with closing for array.
    return stringified += ']';

    // handle objects
  } else if (typeof obj === 'object') {
    //open object ith {}
    var objKeys = Object.keys(obj); // turn keys into object
    
    stringified += '{';
    //iterate through object
    
    for (var j = 0; j < objKeys.length; j++) {
      if (typeof obj[objKeys[j]] === 'function' || typeof obj[objKeys[j]] === 'undefined') {
        stringified += ''; // if  par doesnt exit or function OMIT
      } else if (j === objKeys.length - 1) {
        stringified += stringifyJSON(objKeys[j]) + ':' + stringifyJSON(obj[objKeys[j]]);
      } else {
        stringified += stringifyJSON(objKeys[j]) + ':' + stringifyJSON(obj[objKeys[j]]) + ',';
      }
    } 

    return stringified += '}'; // return closed obj with }
  }
};