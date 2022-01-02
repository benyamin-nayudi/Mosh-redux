### redux toolkit
> providing some utility functions to simplify our redux code

1. function to configure the store.
- no need to pass `devtoolEnhancer` 
- using async api calls (if you don't use the toolkit  function you need to apply middleware in your store )
> the important note here is that if we don't use redux toolkit we should all these configuration manually but by using it , we can get all of them for free. 

**lets implement it in the configureStore file**


---

we also can make better and easier actionsCreators