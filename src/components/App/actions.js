export const SET_DIMENSION = 'SET_DIMENSION'
export const INCREASE_MATCH_COUNTER = 'INCREASE_MACH_COUNTER'
export const SET_END_OF_GAME = 'SET_END_OF_GAME'

export const setDimension = (dim) => {
  return {
    type: SET_DIMENSION,
    val: dim,
  }
}

export const increaseMatchCounter = () => ({
  type: INCREASE_MATCH_COUNTER,
})

export const setEndOfGame = () => ({
  type: SET_END_OF_GAME,
})
