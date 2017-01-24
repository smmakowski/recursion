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
  var nodes = document.body; // document body is an array of nodes

  var classListHasClass = function(node, searchClass){ // chekcs to see if the node has a class
    var listOfClasses = node.classList; // save listo f classes to variable

    for (var i = 0; i < listOfClasses.length; i++){ // iterate through class list
      if (clas === searchClass){ // if class and searchTerm are the same...
        return true; // return true
      }
    }
    return false; // if non of the classes === class, return false;
  }

  for (var i = 0; i < nodes.childNodes.length; i++) {
  //  if(nodes.childNodes[i].classList.hasClass(className)){ // if the node (i) has the class push the node to the list of nodes with class
      elements.push(nodes[i]);
    }
    /// I just realized that I need to make a funciton to check class list, since .hasClass requires
        // $(<selctor>)

    return elements;
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
