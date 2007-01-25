/* -*- indent-tabs-mode: nil -*- 
 *
 * ECMAScript 4 builtins - the "Function" object
 * E262-3 15.3
 * E262-4 draft
 *
 * Status: complete; not reviewed; not tested.
 *
 * The model here is that a function definition is compiled to a
 * Function object whose private "env" property is something
 * arbitrary; when a function is closed in an environment the object
 * is cloned and the clone is given a new value for "env".
 * Implementations don't have to do it that way but as a model it's
 * just fine.
 */

package
{
    dynamic class Function
    {       
        use namespace intrinsic;
        use strict;

        /* E262-3 15.3.1.1: The Function constructor.  This
           initializes the field "source" in the constructed object.
         */
        /* magic */ native function Function(...args);

        /* E262-3 15.3.1: The Function Constructor Called as a Function */
        intrinsic static function invoke(...args)
            Function.construct.apply(null, ...args);

        /* E262-3 10.X / 13.X: function invocation.

           This method is never called.  The Function constructor
           marks instances of Function specially, and recognizes these
           instances in the implementation of function calling.  The
           intrinsic invoke method is defined here to prevent
           subclasses of Function to override it.

           Other parts of the class hierarchy may however create
           intrinsic invoke methods that will be considered by the
           function calling machinery. 
        */
        intrinsic function invoke()
            undefined;

        prototype function toString()
            this.toString();

        intrinsic function toString() : String!
            source;
        
        /* E262-3 15.3.4.3: Function.prototype.apply */
        prototype function apply(thisArg, argArray)
            this.apply(thisArg, argArray);

        intrinsic function apply(thisArg, argArray) : *
            Function.apply(this, thisArg, argArray);

        /* E262-4 draft: "apply" and "call" are static methods on the
           Function object, and everyone eventually ends up in
           Function.apply().

           Note ES4 bug fix: the arguments object is an 'Array', so the test
           for applicability of argArray is simpler than in ES3.
        */
        public static function apply(fn : Function!, thisArg, argArray) {
            if (thisArg === undefined || thisArg === null)
                thisArg = global;
            if (argArray === undefined || argArray === null)
                argArray = [];
            else if (!(argArray is Array))
                throw new TypeError("argument array to 'apply' must be Array");
            return magic::apply(fn, thisArg, argArray);
        }

        /* E262-3 15.3.4.4: Function.prototype.call.

           Assuming a rest argument does not contribute to the
           "length" of the function, so the length of
           Function.prototype.call is 1, which is what we want. 
        */
        prototype function call(thisObj, ...args)
            Function.apply(this, thisObj, args);

        intrinsic function call(thisObj, ...args:Array):*
            Function.apply(this, thisObj, args);

        /* E262-4 draft: "apply" and "call" are static methods on the
           Function object. */
        public static function call(thisObj, ...args:Array):*
            Function.apply(this, thisObj, args);
        
        /* E262-3 15.3.5.3: [[HasInstance]] */
        intrinsic function HasInstance(V) {
            if (!(V is Object))
                return false;

            let O : Object = this.prototype;
            if (!(O is Object))
                throw new TypeError("[[HasInstance]]: prototype is not object");

            while (true) {
                V = magic::getPrototype(V);
                if (V === null)
                    return false;
                if (O == V)
                    return true;
            }
        }

        var source : String!;  /* Source code for decompilation, installed by the constructor */
    }
}
