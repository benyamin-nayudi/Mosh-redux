### selectors
> if we want to get the bugs that are not resolved we should write this snippets:
```css
const unresolvedBugs = store.getState().entities.bugs.filter(bug=> !bug.resolved)
```
this is not a good approach to do this. so we can encapsulate our code and put it inside the bug slice so we can use it anywhere we want.

> the `selector` functions in redux get a `state` and returns the computed `state` , in this case our `getUnresolvedBugs` function returns us a bugs that are not resolved.


other naming conventions for selectors : 
- `selectUnresolvedBugs` 
- `UnresolvedBugsSelector`
- `getUnresolvedBugs`


> instead of importing all the actions from the bug file we can name import our actions so it makes it more readable ( we can use the old way of calling them :` actions.getUnresolvedBugs()`)