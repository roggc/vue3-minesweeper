import { INCREASE_MATCH_COUNTER, SET_DIMENSION } from './actions'

export const iState = () => ({
  dim: 20,
  matchCounter: 0,
})

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DIMENSION:
      state.dim = action.val
      break
    case INCREASE_MATCH_COUNTER:
      state.matchCounter++
      break
  }
}
