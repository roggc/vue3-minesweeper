import {
  INCREASE_MATCH_COUNTER,
  SET_DIMENSION,
  SET_END_OF_GAME,
} from './actions'

export const iState = () => ({
  dim: 20,
  matchCounter: 0,
  endOfGame: false,
})

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DIMENSION:
      state.dim = action.val
      state.endOfGame = false
      break
    case INCREASE_MATCH_COUNTER:
      state.matchCounter++
      break
    case SET_END_OF_GAME:
      state.endOfGame = true
      break
  }
}
