### structuring the redux store:
> there is some structuring patterns that we can use while designing the redux store.

the first structure is an array of bug objects:

```
[
    { id: 1 , desc: '' , resolved : false } , 
    { id: 2 , desc: '' , resolved : false } , 
    { id: 3 , desc: '' , resolved : false } ,
    { ... } 
]
```
there is another way to store the data and it is an objects inside an object like this:

```js
{
    1:  { id: 1 , desc: '' , resolved : false } , 
    2:  { id: 2 , desc: '' , resolved : false } , 
    3:  { id: 3 , desc: '' , resolved : false } ,
    4: { ... }, 
}
```
with this structure we are mapping the bug id to a bug object.( in this case each key is => bug Id and the value => bug object )

benefits of this structure:
- you can lookup a bug easily by its id => `state[1]` and it is a very fast operation.

but if we want to lookup a bug in the previous structure :
```css
    const inx = state.findIndex(bug => bug.id === 1);
    state[idx]
```
> the more items we have in this array the longer it takes to lookup the id and our codes is longer

>note that object allow us a fast lookup but they preserve order so if the user changes the list of bugs we can't change the order of the bugs objects **so you fist must understand what problem are you going to solve**

fast lookups => object  |
ordered data => array

## we can have the combination of the two.
```js
    {
        byId:{
            1: { ... },
            2: { ... },
            3: { ... }
        },
        allIds:[ 3 , 1 , 2]
    }
```
> in this structure we have the `byId` property that represent the bug objects and `allIds` that represents the order of the bugs. so if the user changes the order we simply change the `allIds` array but we still have the `byId` to quickly lookup for bugs.

---

in the real projects we might have more than one slice :
```js
    {
        bugs: [] ,
        projects: [] , 
        tags: []
    }
```
 one good practice is to put these objects under a property name `entities` because these object are parts of our application domain:
```js
    {
        entities: {
            bugs: [] ,
            projects: [] , 
            tags: []
        }
    }
```

and by this approach we can have more top level slices like `auth` (data about the current user ) and `ui` (that stores states specific to a certain pages or components for example for the bug page we can store the search `query` and ...  . these values represents the `ui` states and are different from the `entities`)  :
```js 
    {
        entities: { ... } , 
        auth: { useId : 1 , name : "benyamin" },
        ui: {
            bugs: { query: '...' , sortBy : '...' }
        }
    }
```
 






