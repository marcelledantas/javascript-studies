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
