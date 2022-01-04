const logger = param => store => next => action =>{
    console.log('logging to ' , param)
    console.log('ac:',action)
    next(action)
}

export default logger