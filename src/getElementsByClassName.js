// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// you should use document.body, element.childNodes, element.classList
//what is this function supposed to do?
/*
Returns an array-like object of all child elements which have all of the given class
names. When called on the document object, the complete document is searched,
including the root node. You may also call getElementsByClassName() on any
element; it will return only elements which are descendants of the specified
root element with the given class names.
*/

var getElementsByClassName = function(className
) {
  // your code here
  var elements = [];
  var nodes = document.body;

  for (var i = 0; i < nodes.childNodes; i++) {
  }


  // store children of of document in variable each child has an array
  // iterate through the the children;
  // if a child has children? iterate through their children
  // if not, iterate through their class name and check if they have the class
  // check to seet if child has className
  // if they do, push that element to the

  // iterate through nodes?
 // doucment.childnoes
  //plans? iterate through documen

  return elements;
};
