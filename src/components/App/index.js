import Minesweeper from '../Minesweeper'
import styles from './index.module.css'
import { useReducer } from '../../hooks/useReducer'
import { iState, reducer } from './reducer'
import { onMounted, provide, ref, inject } from 'vue'

export default {
  setup() {
    const [state, dispatch] = useReducer(reducer, iState())

    const infoRef = ref(null)
    const catched = (info) => (infoRef.value = info)

    onMounted(() => {})

    provide('store', { state, dispatch, minesweeper: infoRef })

    const store = ref(null)
    store.value = inject('store')

    return () => {
      return (
        <div class={styles.general}>
          <Minesweeper catchedApp={catched} class={styles.colouredBorder} />
        </div>
      )
    }
  },
}
