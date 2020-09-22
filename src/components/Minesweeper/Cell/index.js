import { onMounted, reactive, ref, inject, watch, onUpdated } from 'vue'
import styles from './index.module.css'
import { useReducer } from '../../../hooks/useReducer'
import { iState, reducer } from './reducer'
import * as cellActions from './actions'
import * as appActions from '../../App/actions'

export default {
  props: ['catched', 'i', 'j'],
  setup(props) {
    const [state, dispatch] = useReducer(reducer, iState())

    onUpdated(() => {
      if (
        store.minesweeper.value.infoRef[props.i][props.j].value.state
          .minesAround > 0 ||
        store.minesweeper.value.infoRef[props.i][props.j].value.state.covered
      ) {
        return
      }
      if (
        store.minesweeper.value.infoRef[props.i - 1] &&
        store.minesweeper.value.infoRef[props.i - 1][props.j - 1] &&
        store.minesweeper.value.infoRef[props.i - 1][props.j - 1].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i - 1][
          props.j - 1
        ].value.ref.click()
      }
      if (
        store.minesweeper.value.infoRef[props.i - 1] &&
        store.minesweeper.value.infoRef[props.i - 1][props.j] &&
        store.minesweeper.value.infoRef[props.i - 1][props.j].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i - 1][props.j].value.ref.click()
      }
      if (
        store.minesweeper.value.infoRef[props.i - 1] &&
        store.minesweeper.value.infoRef[props.i - 1][props.j + 1] &&
        store.minesweeper.value.infoRef[props.i - 1][props.j + 1].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i - 1][
          props.j + 1
        ].value.ref.click()
      }
      if (
        store.minesweeper.value.infoRef[props.i] &&
        store.minesweeper.value.infoRef[props.i][props.j - 1] &&
        store.minesweeper.value.infoRef[props.i][props.j - 1].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i][props.j - 1].value.ref.click()
      }
      if (
        store.minesweeper.value.infoRef[props.i] &&
        store.minesweeper.value.infoRef[props.i][props.j + 1] &&
        store.minesweeper.value.infoRef[props.i][props.j + 1].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i][props.j + 1].value.ref.click()
      }
      if (
        store.minesweeper.value.infoRef[props.i + 1] &&
        store.minesweeper.value.infoRef[props.i + 1][props.j - 1] &&
        store.minesweeper.value.infoRef[props.i + 1][props.j - 1].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i + 1][
          props.j - 1
        ].value.ref.click()
      }
      if (
        store.minesweeper.value.infoRef[props.i + 1] &&
        store.minesweeper.value.infoRef[props.i + 1][props.j] &&
        store.minesweeper.value.infoRef[props.i + 1][props.j].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i + 1][props.j].value.ref.click()
      }
      if (
        store.minesweeper.value.infoRef[props.i + 1] &&
        store.minesweeper.value.infoRef[props.i + 1][props.j + 1] &&
        store.minesweeper.value.infoRef[props.i + 1][props.j + 1].value.state
          .covered
      ) {
        store.minesweeper.value.infoRef[props.i + 1][
          props.j + 1
        ].value.ref.click()
      }
    })

    const cellRef = ref(null)

    onUpdated(() => {
      props.catched.bind(null, {
        state,
        dispatch,
        ref: cellRef,
      })()
    })
    onMounted(() => {
      props.catched.bind(null, {
        state,
        dispatch,
        ref: cellRef,
      })()
    })

    const store = inject('store')

    const uncoverCell = () => {
      if (store.state.endOfGame) {
        return
      }
      dispatch(cellActions.uncoverCell())
    }

    onUpdated(() => {
      if (state.mined && !state.covered) {
        //end of game
        store.dispatch(appActions.setEndOfGame())
      }
    })

    return () => {
      return (
        <div
          class={
            (state.covered ? styles.covered : styles.uncovered) +
            ' ' +
            styles.general
          }
          onClick={uncoverCell}
          ref={cellRef}
        >
          {!state.covered && state.mined && '🎃'}
          {!state.covered &&
            !state.mined &&
            state.minesAround > 0 &&
            state.minesAround}
        </div>
      )
    }
  },
}
