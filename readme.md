### parameterized middleware 
 > so what if we want to have different logging mechanisms for the development and the production mood. so we want to parameterized this middleware function so that we can pass it a parameter and it do its functionality based on its parameter.

 ```css
export default function configureAppStore(){
    return configureStore({ reducer , middleware:[logger('console')] })
}
```
 but if we pass it a parameter like this the `store` will be  `'console' `instead of an object with two methods . so we should add an extra parameter `param` , so when we pass the `'console'` to the `logger` the `param` will be `console` and the `logger` will return the rest of our `middleware` 
 ```js
const logger = param =>  store => next => action =>{
    console.log('logging to' , param)
    next(action)
}
```
we can also pass a complex object `logger{destination: 'console'}`
