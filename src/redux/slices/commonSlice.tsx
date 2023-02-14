import { createSlice } from '@reduxjs/toolkit'
import { dispatch, store } from '../store'
import { slices } from '../../utils/constants'

const initialState: any = {
    dashBoardWidth: "86px"
}

export const commonSlice = createSlice({
    name: slices.COMMON_SLICE,
    initialState,
    reducers: {
        upddatewidth(state, action) {
            state.dashBoardWidth = action.payload
        }
    },
})
// billingSlice
export default commonSlice.reducer

// actions

export const updateWidth = () => {
    return async () => {
        const currentWidth = store.getState().common.dashBoardWidth == '86px' ? '300px' : '86px';
        dispatch(commonSlice.actions.upddatewidth(currentWidth))
    }
}

export const reset = () => {
    return async () => {
        dispatch(commonSlice.actions.upddatewidth('86px'))
    }
}