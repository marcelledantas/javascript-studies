Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope"

Before execution, code is scanned for variable declaration, and for each variable, anew property is created in the variable environment object.

TDZ: Temporary dead zone - makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided. Makes const variables actually work - only should be assigned one time.
