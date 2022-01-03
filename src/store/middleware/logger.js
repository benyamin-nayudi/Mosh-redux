const logger = param => store => next => action =>{
    console.log('logging to ' , param)
    next(action)
}

export default logger