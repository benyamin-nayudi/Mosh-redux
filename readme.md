### combine multiple reducers so we can have store with multiple slices
1. simply we can export our `slices` and import them in a file name `reducer` . then use the `combineReducer` and make an object containing them.
 
---
---
### further more we can put our slices under a property name `entities`.
 
1. to put the reducers under the `entities` object we should make a file name `entities` and import all of our entities's `reducers` . then use the `combineReducer` and combine them and export them .

2. in the `reducer` file we must have all of our reducers because it is our top level reducer (` root reducer` ) and we should import `reducers` like `ui` and `user` reducer in it.






