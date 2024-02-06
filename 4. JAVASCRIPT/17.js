// javascript  'use strict'.
// In Javascript, 'use strict'; status that the code should  be executed in 'strict mode'. this makes it easier to write good and secure to write good  and secure JS code.

// 'use strict';

// {
//     myVariable = 9;
//     console.log(myVariable);
// }

// Headers, mayVariable is created without declaring. this works as as a global  variable in javscript. however , if you use this in strict Mede , the program will throw an error.


// strict mode in variable 

// in strict mode, using a variable without declaring it throw an error.

{
   // console.log('some code');

   // 'use strict' is ignored
   // "use strict";

   // x = 21; // does not an error
   // console.log(x);

}


// strict mode in Functtion 
// you can also use strict mode inside function.

{
    // myVariable = 9;
    // console.log(myVariable); //9

    // function hello(){
    //     'use strict';

    //     let string = 'hello'
    // }
    //   hello();
}

// If you use 'use strict'; inside a function, the code inside the function will be in strict mode.

{
    // function hello(){
    //     string = 'hello'; // throws an error
    // }

    // hello;

    // note : strict mode doesn't apply to block ststement with {} bracks.
}

// thinks Not  allowed in strict mode.
// 1. underclared variable is not allowed.
{
    // 'use strict';

    // a = 'hello'; // throws an error
}

// 2. underclared objects are not allowed

{
    // 'use strict';

    // person = {name: 'carla',age : 25}; // throws an error
}

// 3. deleting an object is not allowed.

{
   // 'use strict';

   // let person = {name: 'carla'};

   // delete person; // throw an error
   
}

// 4. Duplication a parameter name is not allowed.

{
    // "use stict";

    // function hallo(p1, p1) {  console.log('hello')}; // throw an error

    // hello();
}

// 5. assigning to a non-writable property is not allowed.

{
    // 'use stct';

    // let obj1 = {};

    // object.defineproperty(obj1,'x', {value: 42, writable: false});

    // assignment to a non-writable property
    // obj1.x = 9; // throws an error 
}

// 6. assigning to a getter-only property is not allowed.

{
      // 'use strict';
      
      // let obj2 = {get x() { return 17; } };
      
      // asignment to a getter -only property
      // obj2.x = 5; // throw an error 
}

// 7. assigning to a new property on a non - exetensible object is not allowed.

{
    // 'use strict';

    // let obj = {};
    // object.preventExtensions(obj);
    // assignment = 'new value'; // throw an error
}

// 8. octal syntax is not allowe.

{
    // 'use strict';

    // let a = 010; // throws an error 
}

// 9. the variable name arguments and eval are not alowed.

{
     // 'use strict';

     // let arguments = 'hello'; // throws an error
 
     // let eval = 44;
}

// 10. you can not also use these reseved keywords in strict mode. 

// implements interface let package private protected public static yield

// Benefits of strict mode

// the use of strict mode:

// change previously accepted silent error (bad syntax) into real error and throws an error message
// makes it easier to write "secure" javscript  