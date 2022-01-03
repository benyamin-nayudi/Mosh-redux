### Memoization
>it is a technique for optimizing expensive functions. in our case the `filter` method applied in the `getUnresolvedBugs` function returns a new array every time we call it even if the state hasn't changed. so to avoid rerender for unChanged states we can use this technique. 

how does it woks:

so imaging that we have a function like this:
```
f(X) => Y
```
this function returns ` Y ` every time we pass it `X`. 

in this case we can build a `cache` of `input` and `output` to store the input and the output every time we invoke this function. 

```css
f(1) => 2    { input : 1 , output: 2}
```
in this case , later on if we pass it 1 again it no longer needs to recompute the output again and it can just returns the output in the cache object.

> for this we can use the `reselect` library 

>look for more in the [bugs](src\store\bugs.js) file 



