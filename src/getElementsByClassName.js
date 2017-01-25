// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//what is this function supposed to do?
/*
Returns an "array-like object" of all child elements which have all of the given class
names. When called on the document object, the complete document is searched,
including the root node. You may also call getElementsByClassName() on any
element; it will return only elements which are descendants of the specified
root element with the given class names.

- Mozilla Domentation

*/
var getElementsByClassName = function(className
) {
  // your code here
  var elements = [];

  // create a function to check nodes

  var checkNodeForClass = function(node){
  // if the node has a class push that node to elements (base?)

  // if the node has children, check their children usin  (recursive case)


  }

  // if the node has a class push that node to elements

  /*
  var classListHasClass = function(node, searchClass){ // chekcs to see if the node has a class
    var listOfClasses = node.classList; // save listo f classes to variable

        if (node.classList.indexOf(searchClass) !== 1){
          return true; // return true
        } else {
          return false; // if non of the classes === class, return false;
        }
  };

  for (var i = 0; i < nodes.childNodes.length; i++) {
    if(classListHasClass(nodes.childNodes[i].classList, className)){ // if the node (i) has the class push the node to the list of nodes with class
      elements.push(nodes[i]);
    }
    
  }
  // run check nodeForClass on the document
  
  */  return elements;  ///return 
  }

  // you should use:
    // document.body X
    // element.childNodes X
    // element.classList

  // childNodes is an array of nodes
  //element classList is an array of classes
  // maybe can use hasClass()?

  // store children of of document.body in variable each child has an array X
  // iterate through the the children X
  // if a child has children? iterate through their children X is this where the recursion happens?
  // if not, iterate through their class name and check if they have the class
  // check to seet if child has className (maybe do before iterating through children)
  // if they do, push that element to the ( adds to element list)

  // iterate through nodes?
 // doucment.childnoes
  //plans? iterate through document
