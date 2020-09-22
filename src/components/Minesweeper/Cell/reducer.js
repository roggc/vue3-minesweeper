import { RESET_STATE, UNCOVER } from './actions'

export const iState = () => ({
  covered: true,
  mined: Math.random() < 0.05,
  minesAround: undefined,
})

export const reducer = (state, action) => {
  switch (action.type) {
    case UNCOVER:
      state.covered = false
      break
    case RESET_STATE:
      state.covered = true
      state.mined = Math.random() < 0.05
      state.minesAround = undefined
      break
  }
}
