/* -*- mode: java; indent-tabs-mode: nil -*-
 *
 * ECMAScript 4 builtins - the "decimal" object
 *
 * E262-3 15.7
 * E262-4 proposals:numbers
 * Tamarin code.
 *
 * The following licensing terms and conditions apply and must be
 * accepted in order to use the Reference Implementation:
 *
 *    1. This Reference Implementation is made available to all
 * interested persons on the same terms as Ecma makes available its
 * standards and technical reports, as set forth at
 * http://www.ecma-international.org/publications/.
 *
 *    2. All liability and responsibility for any use of this Reference
 * Implementation rests with the user, and not with any of the parties
 * who contribute to, or who own or hold any copyright in, this Reference
 * Implementation.
 *
 *    3. THIS REFERENCE IMPLEMENTATION IS PROVIDED BY THE COPYRIGHT
 * HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
 * IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * End of Terms and Conditions
 *
 * Copyright (c) 2007 Adobe Systems Inc., The Mozilla Foundation, Opera
 * Software ASA, and others.
 *
 *
 * Status: Incomplete (toExponential, toPrecision, toFixed; constants); not reviewed; not tested.
 */

package
{
    use default namespace public;
    use namespace intrinsic;
    use strict;
    import ECMAScript4_Internal.*;

    // The [[Prototype]] of "int" is Number.[[Prototype]]
    // Don't add prototype methods or properties here!

    intrinsic final class decimal!
    {
        // FIXME
        static const MAX_VALUE         = 1.7976931348623157e+308m;
        static const MIN_VALUE         = 5e-324m;
        static const NaN               = 0.0m / 0.0m;  // ???
        static const NEGATIVE_INFINITY = -1.0m / 0.0m; // ???
        static const POSITIVE_INFINITY = 1.0m / 0.0m;  // ???

        // 15.8.1 Value Properties of the Math Object.  These are {DD,DE,RO}.
        // FIXME: we can be more precise here, these are just the double values
        // copied over.
        static const E: decimal = 2.7182818284590452354m;   /* Approximately */
        static const LN10: decimal = 2.302585092994046m;    /* Approximately */
        static const LN2: decimal = 0.6931471805599453m;    /* Approximately */
        static const LOG2E: decimal = 1.4426950408889634m;  /* Approximately */
        static const LOG10E: decimal = 0.4342944819032518m; /* Approximately */
        static const PI: decimal = 3.1415926535897932m;     /* Approximately */
        static const SQRT1_2: decimal = 0.7071067811865476m;/* Approximately */
        static const SQRT2: decimal = 1.4142135623730951m;  /* Approximately */

        /* Obsolete, needed for the moment because the RI does not yet handle
           interconversion of numbers */
        meta static function convert(x)
            decimal(x);

        /* E262-3 15.7.1.1: The decimal Constructor Called as a Function */
        meta static function invoke(x=0m)
            x is decimal ? x : new decimal(x);

        /* E262-3 15.7.2.1: The decimal constructor */
        function decimal(x=0m)
            magic::bindDecimal(this, x);

        override intrinsic function toString(radix = 10) : string {
            if (radix === 10 || radix === undefined)
                return string(this);
            else if (typeof radix === "number" && 
                     radix >= 2 && 
                     radix <= 36 && 
                     helper::isIntegral(radix)) {
                // FIXME
                throw new Error("Unimplemented: non-decimal radix");
            }
            else
                throw new TypeError("Invalid radix argument to decimal.toString");
        }

        /* INFORMATIVE */
        override intrinsic function toLocaleString() : string
            toString();

        override intrinsic function valueOf() : decimal
            this;

        // FIXME: wrong to convert to double here
        intrinsic function toFixed(fractionDigits=0) : string
            double(this).intrinsic::toFixed(fractionDigits);

        // FIXME: wrong to convert to double here
        intrinsic function toExponential(fractionDigits=undefined) : string
            double(this).intrinsic::toExponential(fractionDigits);

        // FIXME: wrong to convert to double here
        intrinsic function toPrecision(precision=undefined) : string
            double(this).intrinsic::toPrecision(precision);

        /* The E262-3 number primitive consumes all additional [[set]] operations. */
        // FIXME: why is this here?
        meta function set(n,v) : void
        {
        }
    }
}
