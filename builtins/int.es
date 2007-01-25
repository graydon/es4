/* -*- indent-tabs-mode: nil -*- 
 *
 * ECMAScript 4 builtins - the "int" object
 *
 * E262-3 15.7
 * E262-4 proposals:numbers
 * Tamarin code
 *
 * Status: Complete; not reviewed; not tested.
 */

package
{
    use namespace intrinsic;
    use strict;

    final class int!
    {       
        public static const MAX_VALUE : int = 0x7FFFFFFF;
        public static const MIN_VALUE : int = -0x80000000;

        /* E262-4 draft */
        static function to(x : Numeric) : int
            x is int ? x : ToInt(x);

        /* E262-4 draft: The int Constructor Called as a Function */
        intrinsic static function call(value)
            value === undefined ? 0i : ToInt(value);

        /* E262-4 draft: The int constructor */
        public function int(value) {
            magic::setValue(this, ToInt(value));
	}

        /* E262-4 draft: int.prototype.toString */
        prototype function toString(this:int, radix:Number)
            this.toString(radix);

        intrinsic function toString(radix:Number = 10) : String! {
            if (radix === 10 || radix === undefined)
                return ToString(magic::getValue(this));
            else if (typeof radix === "number" && radix >= 2 && radix <= 36 && isIntegral(radix)) {
                // FIXME
                throw new Error("Unimplemented: non-decimal radix");
            }
            else
                throw new TypeError("Invalid radix argument to Number.toString");
        }
        
        /* E262-4 draft: int.prototype.toLocaleString() */
        prototype function toLocaleString(this:int)
            this.toLocaleString();

        /* INFORMATIVE */
        intrinsic function toLocaleString() : String!
            toString();

        /* E262-4 draft: int.prototype.valueOf */
        prototype function valueOf(this:int)
            this.valueOf();

        intrinsic function valueOf() : Object!
            this;

        /* E262-3 15.7.4.5 int.prototype.toFixed */
        prototype function toFixed(this:int, fractionDigits)
            this.toFixed(ToNumber(fractionDigits));

        intrinsic function toFixed(fractionDigits:Number) : String! 
	    ToDouble(this).toFixed(fractionDigits);

        /* E262-4 draft: int.prototype.toExponential */
        prototype function toExponential(this:int, fractionDigits)
            this.toExponential(ToDouble(fractionDigits));

        intrinsic function toExponential(fractionDigits:Number) : String!
	    ToDouble(this).toExponential(fractionDigits);

        /* E262-4 draft: int.prototype.toPrecision */
        prototype function toPrecision(this:int, precision)
            this.toPrecision(ToDouble(precision));

        intrinsic function toPrecision(precision:Number) : String!
	    ToDouble(this).toPrecision(precision);
    }
}