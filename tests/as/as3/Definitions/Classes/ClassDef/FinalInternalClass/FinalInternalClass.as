/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is [Open Source Virtual Machine.].
 *
 * The Initial Developer of the Original Code is
 * Adobe System Incorporated.
 * Portions created by the Initial Developer are Copyright (C) 2005-2006
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Adobe AS3 Team
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
package FinalInternalClassPackage {
	final internal class FinalInternalClass {

		var array:Array;							// Default property
		static var statFunction:Function;			// Default Static property
		var finNumber:Number;					// Default Final property
		static var finStatNumber:Number;		// Default Final Static property
		
		internal var internalArray:Array;							// Internal property
		internal static var internalStatFunction:Function;			// Internal Static property
		internal var internalFinNumber:Number;				// Internal Final property
		internal static var internalFinStatNumber:Number;		// Internal Final Static property

		private var privDate:Date;								// Private property
		private static var privStatString:String;				// Private Static property
		private var privFinalString:String;				// Private Final property
		private static var privFinalStaticString:String	// Private Final Static property

		public var pubBoolean:Boolean;						// Public property
		public static var pubStatObject:Object;				// Public Static property
		public var pubFinArray:Array;					// Public Final property
		public static var pubFinalStaticNumber:Number	// Public Final Static property

		// Testing property for constructor testing
		public static var constructorCount : int = 0;
		
		// *****************
		// Constructors
		// *****************
		function FinalInternalClass () {
			FinalInternalClass.constructorCount ++;
		}

		// *****************
		// Default methods
		// *****************
		function getArray() : Array { return array; }
		function setArray( a:Array ) { array = a; }
		
		
		// ************************
		// Default virtual methods
		// ************************
		function getVirtualArray() : Array { return array; }
		function setVirtualArray( a:Array ) { array = a; }
		
		
		// ***********************
		// Default Static methods
		// ***********************
		static function setStatFunction(f:Function) { statFunction = f; }
		static function getStatFunction() : Function { return statFunction; }

        
        // **********************
        // Default Final methods
		// **********************
		final function setFinNumber(n:Number) { finNumber = n; }
		final function getFinNumber() : Number { return finNumber; }

		
		// *****************
		// Internal methods
		// *****************
		internal function getInternalArray() : Array { return internalArray; }
		internal function setInternalArray( a:Array ) { internalArray = a; }
		
		
		// *************************
		// Internal virtual methods
		// *************************
		internal function getInternalVirtualArray() : Array { return internalArray; }
		internal function setInternalVirtualArray( a:Array ) { internalArray = a; }
		
		
		// ***********************
		// Internal Static methods
		// ***********************
		internal static function setInternalStatFunction(f:Function) { FinalInternalClass.internalStatFunction = f; }
		internal static function getInternalStatFunction() : Function { return FinalInternalClass.internalStatFunction; }
        
        
        // **********************
        // Internal Final methods
		// **********************
		internal final function setInternalFinNumber(n:Number) { internalFinNumber = n; }
		internal final function getInternalFinNumber() : Number { return internalFinNumber; }
        
        
		// *******************
		// Private methods
		// *******************
		private function getPrivDate() : Date { return privDate; }
		private function setPrivDate( d:Date ) { privDate = d; }
		// wrapper function
		public function testGetSetPrivDate(d:Date) : Date {
			setPrivDate(d);
			return getPrivDate();
		}
		
		
		// *******************
		// Private virutal methods
		// *******************
		private function getPrivVirtualDate() : Date { return privDate; }
		private function setPrivVirtualDate( d:Date ) { privDate = d; }
		// wrapper function
		public function testGetSetPrivVirtualDate(d:Date) : Date {
			setPrivVirtualDate(d);
			return getPrivVirtualDate();
		}


		// **************************
		// Private Static methods
		// **************************
		private static function setPrivStatString(s:String) { privStatString = s; }
		private static function getPrivStatString() : String { return privStatString; }
		// wrapper function
		public function testGetSetPrivStatString(s:String) : String {
			setPrivStatString(s);
			return getPrivStatString();
		}
		
		
		// **************************
		// Private Final methods
		// **************************
		private final function setPrivFinalString(s:String) { privFinalString = s; }
		private final function getPrivFinalString() : String { return privFinalString; }
		// wrapper function
		public function testGetSetPrivFinalString(s:String) : String {
			setPrivFinalString(s);
			return getPrivFinalString();
		}
		
	
		
		// *******************
		// Public methods
		// *******************
		public function setPubBoolean( b:Boolean ) { pubBoolean = b; }
		public function getPubBoolean() : Boolean { return pubBoolean; }
		
		
		// *******************
		// Public virtual methods
		// *******************
		public function setPubVirtualBoolean( b:Boolean ) { pubBoolean = b; }
		public function getPubVirtualBoolean() : Boolean { return pubBoolean; }


		// **************************
		// Public Static methods
		// **************************
		public static function setPubStatObject(o:Object) { FinalInternalClass.pubStatObject = o; }
		public static function getPubStatObject() : Object { return FinalInternalClass.pubStatObject; }


		// *******************
		// Public Final methods
		// *******************
		public final function setPubFinArray(a:Array) { pubFinArray = a; }
		public final function getPubFinArray() : Array { return pubFinArray; }


	}
	
	public class FinalInternalClassAccessor {
		private var Obj:FinalInternalClass = new FinalInternalClass();
		
		// Constructor tests
		public function testConstructorOne() : int {
			var foo = new FinalInternalClass();
			return FinalInternalClass.constructorCount;
		}
		public function testConstructorTwo() : int {
			var foo = new FinalInternalClass;
			return FinalInternalClass.constructorCount;
		}
		
		
		// Default method
		public function testGetSetArray(a:Array) : Array {
			Obj.setArray(a);
			return Obj.getArray();
		}
		// Default virtual method
		public function testGetSetVirtualArray(a:Array) : Array {
			Obj.setVirtualArray(a);
			return Obj.getVirtualArray();
		}
		// Default static method
		public function testGetSetStatFunction(f:Function) : Function {
			FinalInternalClass.setStatFunction(f);
			return FinalInternalClass.getStatFunction();
		}
		// Default final method
		public function testGetSetFinNumber(n:Number) : Number {
			Obj.setFinNumber(n);
			return Obj.getFinNumber();
		}
		
		// internal method
		public function testGetSetInternalArray(a:Array) : Array {
			Obj.setInternalArray(a);
			return Obj.getInternalArray();
		}
		// internal virtual method
		public function testGetSetInternalVirtualArray(a:Array) : Array {
			Obj.setInternalVirtualArray(a);
			return Obj.getInternalVirtualArray();
		}
		// internal static method
		public function testGetSetInternalStatFunction(f:Function) : Function {
			FinalInternalClass.setInternalStatFunction(f);
			return FinalInternalClass.getInternalStatFunction();
		}
		// internal final method
		public function testGetSetInternalFinNumber(n:Number) : Number {
			Obj.setInternalFinNumber(n);
			return Obj.getInternalFinNumber();
		}
		
		// private method
		public function testGetSetPrivDate(d:Date) : Date {
			return Obj.testGetSetPrivDate(d);
		}
		// private virtualmethod
		public function testGetSetPrivVirtualDate(d:Date) : Date {
			return Obj.testGetSetPrivVirtualDate(d);
		}
		// Private Static methods
		public function testGetSetPrivStatString(s:String) : String {
			return Obj.testGetSetPrivStatString(s);
		}
		// Private Final methods
		public function testGetSetPrivFinalString(s:String) : String {
			return Obj.testGetSetPrivFinalString(s);
		}
		
		// Public methods
		public function setPubBoolean( b:Boolean ) { Obj.setPubBoolean(b); }
		public function getPubBoolean() : Boolean { return Obj.getPubBoolean(); }
		// Public virtual methods
		public function setPubVirtualBoolean( b:Boolean ) { Obj.setPubVirtualBoolean(b); }
		public function getPubVirtualBoolean() : Boolean { return Obj.getPubVirtualBoolean(); }
		// Public Static methods
		public function setPubStatObject(o:Object) { FinalInternalClass.setPubStatObject(o); }
		public function getPubStatObject() : Object { return FinalInternalClass.getPubStatObject(); }
		// Public Final methods
		public function setPubFinArray(a:Array) { Obj.setPubFinArray(a); }
		public function getPubFinArray() : Array { return Obj.getPubFinArray(); }


	}
	
}
