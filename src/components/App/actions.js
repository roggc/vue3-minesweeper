export const SET_DIMENSION = 'SET_DIMENSION'
export const INCREASE_MATCH_COUNTER = 'INCREASE_MACH_COUNTER'

export const setDimension = (dim) => {
  return {
    type: SET_DIMENSION,
    val: dim,
  }
}

export const increaseMatchCounter = () => ({
  type: INCREASE_MATCH_COUNTER,
})
