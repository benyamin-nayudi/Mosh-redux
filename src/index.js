import store from './store'

// the subscribe method will fire every time the state of the store changes
// UI components should subscribe to the store so they can rerender(in react) or refresh the view (like vanilla js)
// the subscribe function returns an unsubscribing function from the store, this is happens when sometimes the user leaves the page without subscribing , and the component will not render in the new one so we don't want a subscription to those components so we should unsubscribe from those store
const unsubscribe = store.subscribe(()=>{
    console.log('store changed!' , store.getState())
})



store.dispatch({
    type: "bugAdded" , 
    payload:{
        description: 'bug1'
    }
})
// so if here we unsubscribe  , we don't get the message 
unsubscribe()

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})
console.log(store.getState())