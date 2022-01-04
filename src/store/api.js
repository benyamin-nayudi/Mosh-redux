import { createAction } from "@reduxjs/toolkit"
// this approach in naming the actions is more consistent.
export const apiCallBegan = createAction("api/callBegan")
export const apiCallSuccess = createAction("api/callSuccess")
export const apiCallFailed = createAction("api/callFailed")








