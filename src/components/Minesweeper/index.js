import styles from './index.module.css'
import Cell from './Cell'
import { onMounted, provide, ref, reactive, inject, onUpdated } from 'vue'
import withCatched from '../../hocs/withCatched'
import { useReducer } from 'vue-use-reducer'
import { iState, reducer } from './reducer'
import * as appActions from '../App/actions'
import * as cellActions from './Cell/actions'

export default withCatched({
  props: ['catched', 'infoRef', 'catchedApp', 'class'],
  setup(props) {
    const [state, dispatch] = useReducer(reducer, iState)

    onMounted(() => {
      props.catchedApp.bind(null, { state, dispatch, infoRef: props.infoRef })()
    })

    onUpdated(() => {
      props.catchedApp.bind(null, { state, dispatch, infoRef: props.infoRef })()
    })

    // const store = ref(null)
    // store.value = inject('store')
    const store = inject('store')
    // console.log(store)

    const calculateMinesAround = () => {
      const dim = store.state.dim
      for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
          let minesAround = 0
          if (
            store.minesweeper.value.infoRef[i - 1] &&
            store.minesweeper.value.infoRef[i - 1][j - 1] &&
            store.minesweeper.value.infoRef[i - 1][j - 1].value.state.mined
          ) {
            minesAround++
          }
          if (
            store.minesweeper.value.infoRef[i - 1] &&
            store.minesweeper.value.infoRef[i - 1][j] &&
            store.minesweeper.value.infoRef[i - 1][j].value.state.mined
          ) {
            minesAround++
          }
          if (
            store.minesweeper.value.infoRef[i - 1] &&
            store.minesweeper.value.infoRef[i - 1][j + 1] &&
            store.minesweeper.value.infoRef[i - 1][j + 1].value.state.mined
          ) {
            minesAround++
          }
          if (
            store.minesweeper.value.infoRef[i] &&
            store.minesweeper.value.infoRef[i][j - 1] &&
            store.minesweeper.value.infoRef[i][j - 1].value.state.mined
          ) {
            minesAround++
          }
          if (
            store.minesweeper.value.infoRef[i] &&
            store.minesweeper.value.infoRef[i][j + 1] &&
            store.minesweeper.value.infoRef[i][j + 1].value.state.mined
          ) {
            minesAround++
          }
          if (
            store.minesweeper.value.infoRef[i + 1] &&
            store.minesweeper.value.infoRef[i + 1][j - 1] &&
            store.minesweeper.value.infoRef[i + 1][j - 1].value.state.mined
          ) {
            minesAround++
          }
          if (
            store.minesweeper.value.infoRef[i + 1] &&
            store.minesweeper.value.infoRef[i + 1][j] &&
            store.minesweeper.value.infoRef[i + 1][j].value.state.mined
          ) {
            minesAround++
          }
          if (
            store.minesweeper.value.infoRef[i + 1] &&
            store.minesweeper.value.infoRef[i + 1][j + 1] &&
            store.minesweeper.value.infoRef[i + 1][j + 1].value.state.mined
          ) {
            minesAround++
          }
          store.minesweeper.value.infoRef[i][
            j
          ].value.state.minesAround = minesAround
        }
      }
    }

    onUpdated(calculateMinesAround)
    onMounted(calculateMinesAround)

    const setDimension = () => {
      store.dispatch(appActions.setDimension(dimensionRef.value.value))
      store.dispatch(appActions.increaseMatchCounter())
    }

    const dimensionRef = ref(null)

    return () => {
      const dim = store.state.dim
      const cells = []
      for (let i = 0; i < dim; i++) {
        cells[i] = new Array(dim)
        for (let j = 0; j < dim; j++) {
          cells[i][j] = (
            <Cell
              key={i + '_' + j + '_' + store.state.matchCounter}
              catched={props.catched[i][j]}
              i={i}
              j={j}
            />
          )
        }
      }

      return (
        <div class={props.class}>
          <div class={styles.content}>
            <div class={styles.wrap}>
              {cells.map((row) => (
                <div class={styles.row}>{row}</div>
              ))}
            </div>
            <div class={styles.row2}>
              <button
                class={styles.btn + ' btn btn-primary'}
                onClick={setDimension}
              >
                reset
              </button>
              <div>
                <label for='dimension'>dimension</label>
                <input
                  id='dimension'
                  type='number'
                  class='form-control'
                  value={dim}
                  ref={dimensionRef}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  },
})
