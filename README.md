## Async Vs Defer


```bash
<script src=""/>
```
 
In normal html parsing goes on and once browser come in contact with script tag, it download that script and then it execute the downloaded script. After this the normal html parsing continue

```bash
 ## Async
<script async src=""/>

```
In this case, html parsing continue, and once browser sees script tag it fetch the script simulatanulsly while fetching. Once script fetching is done, it stop html parsing and execute downloaded script. After execution, it continue with html fetching.

```bash
  
## Defer
<script defer src=""/>

```

In this case, html parsing continue and it fetches script parallely, it execute downloaded script only when html parsing is completed.

### Type coercion 

Type coercion is a concept in programming languages, including JavaScript, where values of one data type are automatically and implicitly converted to another data type during certain operations or comparisons. 

let num = 5;
let str = "10";
let result = num + str; // JavaScript converts `num` to a string and performs concatenation, resulting in "510".

1. JavaScript initially sees that you're trying to compare a number (num) and a string (str) using ==.

2. It then attempts to perform a type coercion to make the operands compatible for comparison. In this case, JavaScript tries to convert one of the operands to match the type of the other operand so that the comparison can proceed.

3. In this specific case, JavaScript converts the number num to a string because it's easier to convert a number to a string than the other way around. So, num is temporarily converted to the string "5".

4. After the type coercion, both operands are of the same type (both are strings), so the comparison becomes "5" == "5".

5. Now, with both operands being strings, the loose equality operator (==) performs a character-by-character comparison, and it finds that the two strings are identical. Therefore, the condition is true.

## Hoisting
https://blog.devgenius.io/hoisting-in-javascript-c90f6d03d2df