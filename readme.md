### how to manage our files in redux
1. all files related to redux should be moved to `store` folder and be separated from the UI files. 
> don't call it redux , Name your files base on their roles.

2. we can break our application into sub domains and put each in a `feature` folder , and each sub domain contains its `action` ,`actionTypes` ,`reducer` : an example of this sub domain is `auth` for authentication of our website and include actions such as `login` , `logout` , `change password` etc.

3. `ducks pattern`: make any feature a single file like : `auth.js` and put all the `actions` , `reducers` and `actionTypes` in a single file avoiding to jump between three files

4. another approach in designing the folders and files is to have separated folders for each feature containing actions.js, reducer.js ,actionTypes.js and so on. 

> these methods does have their pros and cons and it absolutely depends on your project.

## rules of the DUCKS pattern

1. your reducer must be a default export
2. you need to export individual actions

lets implement it...

> rename the `store` file to `configureStore` and export default a function that returns the `store` that has been created by `createStore`