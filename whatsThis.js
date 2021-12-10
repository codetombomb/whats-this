/*
 * ---------------  Understanding the 'this' keyword in JS ---------------  
 *  =======================================================================
 *
 *  The this keyword allows us to reuse functions with different contexts. Or, in other words, it
 *  allows us to decide which objects should be focal when invoking a function or a method. 
 *
 *  BREAKING DOWN THIS INTO FOUR RULES:
 *
 *      - Implicit binding
 *          - Explicit binding
 *              - new binding
 *                  - window binding
 *
 *                  The first thing that you need to ask yourself when trying to figure out what 'this' is referring to
 *                  is:
 *                      "Where is this function invoked?"
 *
 *                      Let's say that we have a function called say name that accepts a string (name) as an arg and 
 *                      console.logs 'Hello, ' + name
 *                      */

const sayName = function(name){
	    console.log('Hello, ' + name)
}

/*
 * Before we actually invoke this sayName function, the name parameter will not be defined. For the 
 * name parameter to receive its value, we have to do this: 
 *     
 *         sayName("Tom")
 *
 *         The same thing is true of the 'this' keyword. It will not have a context until a function is invoked.
 *         */


/*
 * --------------------------------------------------------
 *  ------------------- IMPLICIT BINDING -------------------
 *  --------------------------------------------------------
 *
 *  Implicit binding is the most common rule and accounts for about 80% of the use cases when trying 
 *  to figure out what 'this' is. So, let's say that we had a me object and it had name and age property.
 *  Also, let's give the me object a sayName method that console.logs this.name:
 *  */

const me = {
	    name: 'Tom', 
	    age: '35',
	    sayName: function(){
		            console.log(this.name)
		        }
}

/*
 * And if we were to invoke this method:
 *     me.sayName()
 *         => 'Tom'
 *
 *         To, determine what 'this' is, we have to look to the left of the dot in me.sayName() - so, me.
 *         It would be as if we said me.name inside of the sayName function.
 *
 *         We can take this a step further. Let's now create sayNameMixin function that takes in an object
 *         and adds a sayName method to the passed in object. The sayName method will do the same thing as 
 *         before:
 *
 *         */

const sayNameMixin = function (obj){
	    obj.sayName = function(){
		            console.log(this.name)
		        }
}


 

// And now, let's invoke the sayName methods on lennon and lennon.mother:
// lennon.sayName() // => "Lennon"
// lennon.mother.sayName() // => "Ashton"
//
//
//
//
//
//
//
//

