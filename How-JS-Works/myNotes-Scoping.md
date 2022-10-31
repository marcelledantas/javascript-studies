Scopes: global, function and block

Global:

- outside of any function or block
- accessible everywhere

Function

- only accessible inside function
- local scope

Block

- accessible only inside blocks (if, try, loops)
- functions are also block scoped (only in strict mode)
- the var type is not applicable, just for let and const

Variable lookup in scope chain:
If one scope needs to use a certain variable, but it cannot find it in the current scope, it will lookup in the scope chain and see if it can find a variable in one of the parent scopes. If it can, then it will use the variable, if not it will be an error. (THIS IS NOT HAPPEN IN THE OTHER WAY AROUND. Meaning: The parent scope cannot use a variable from the child scope).

Difference between SCOPE CHAIN and CALL STACK
call stack: order in which functions were called

Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?"

Only let and const variables are block-scoped. Variabled declared with var end up in the closest function scope

Every scope always has access to all the variables from all its outer scopes. This is the scope chain.

When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup.

The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope

The scope chain in a certain scope is equal to adding together all the variables environments of the all parent scopes

The scope chain has nothing to do with the order in which functions were called. It doesn't affect the scope chain at all.

Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope"

Before execution, code is scanned for variable declaration, and for each variable, anew property is created in the variable environment object.

TDZ: Temporary dead zone - makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided. Makes const variables actually work - only should be assigned one time.
