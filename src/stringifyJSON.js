// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//sample datatypes with
function func(param){
  return param;
}
console.log(JSON.stringify(func));
var str = 'hello';
console.log(JSON.stringify(str));
var num = 7;
console.log(JSON.stringify(num));
var bool = true;
console.log(JSON.stringify(bool));
var undef = undefined;
console.log(JSON.stringify(undef));
var nul = null;
console.log(JSON.stringify(null));
var obj = {key: 1, key2: 'hi', key3: true,};
console.log(JSON.stringify(obj));
var arr =[1, 2,, 3, false, 5,'yes'];
console.log(JSON.stringify(arr));
function func(param){
  return param;
}
console.log(JSON.stringify(func));
console.log('' + null)
console.log(typeof func)


var stringifyJSON = function(obj) {
	var stringified = ''; // js returns a string initiate string to ''

  //should handle 'objects' that arenet arrays or objects


  // if not collection llike objects string obj

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';

    //handle arrays
  } else if (Array.isArray(obj)){
    // start opening of array
    stringified += '[';

    // iteratethough the array
    for (var i = 0; i < obj.length; i++) {
      //if last oject in array stringify object
      if (i === obj.length -1) {
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
    stringified += '{';
    //iterate through object
    
    for (var key in obj) {
      stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); // strigify the keeys
    } 

    return stringified += '}'; // return closed obj with }
  }

  //// if a collection, then iterate through collection and strigify contents

    // iterate through array and string contents

    // be able to iterate through object and string contents
};

/// special rules for
///JSON turns objs tostrings based on types
///

//JSON converts Bools Number and Strings

// if undefined, function or symbol it is either ommited or function
  // it is ommitted (if in object)
  // or censored to null in array

// shlould iterate through array and striginigy contents

//should stringigy contents of objects
