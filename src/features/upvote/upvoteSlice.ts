import { createSlice } from '@reduxjs/toolkit'

export const upvoteSlice = createSlice({
  name: 'features-store',
  initialState: {
    features: [],
  },
  reducers: {
    upVote: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.features[action.payload.id].votes += 1
    },
    downVote: (state, action) => {
      state.features[action.payload.id].votes -= 1
    },
    loadData: (state, action) => {
      state.features = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { upVote, downVote, loadData } = upvoteSlice.actions

export default upvoteSlice.reducer