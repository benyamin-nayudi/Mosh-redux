## redux devTool

>if you want to use it you should copy a piece of code to your store 

const store = createStore(reducer , `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)`
and you can find it in the website when you open it from the tab
### there is some tabs inside the redux devTools 

* the left hand side of the page is the monitors and the inspector is the most important one .

> the log monitor shows us the different action that have been dispatched with their properties.


## the inspector have two parts . 
### the right one is the actions and we can jump between them. if you select an action there is various views to show you how the state is changing on the right hand side of the page.

>  the action part shows you the action that has been dispatched (information about the selected action)
- there are three different ways of showing the data , `tree` , `chart` , `Raw`.

> the state part shows you how the state changes one by one(it shows the state after the action done)

> the diff part shows you the difference between the states , in face it shows the change in the state in a compare manner
---
### how to solve bugs:
- you launch your application and expect to see the number one on the screen but you see the number 2 what is the source of problem?
#### first you open the redux devtools

1. look at the list of action that have been dispatched and make sure the right action is dispatched. => if not dispatch that action

2. you look at the action tab and make sure that action was carrying the right data => if not you need to modify your action creator, cuz that is the function responsible to create this function.

3. check the state tab and see if the state is changed properly and if the state is complex 

4. you can use the diff tab to see what exactly was changed => if the state didn't change properly that means that you have problem with your reducer cuz it is the responsible of updating the state

---
#### fo the tracing (know where your dispatcher makes an action) you must first install the npm `redux-devtools-extension` and to make it work add this line of code in your webpack file `devtool: 'source-map'` . your store after installing this npm is gonna be like this: 
`const store = createStore(reducer ,devToolsEnhancer({trace: true}))
`

> now if you go to the setting and paste the absolute path(from file explorer) and give it to that box when clicking on the dispatch functions in the trace it will bring you to that dispatcher line 

---
### importing and exporting actions

> we can export the actions so we can simulate the exact state changes in the client side . for this we click the `up arrow ` in the redux devTool and export the actions. then if we comment out the actions in the index.js that we have dispatched and click the `down arrow` and import the file , all the actions will be simulated again. this is so powerful to reproduce a bug that have been generated without need to take all steps to reproduce it again.