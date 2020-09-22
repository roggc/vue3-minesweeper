import { onMounted, ref, inject, onUpdated } from 'vue'

export default (C) => ({
  setup(props) {
    const store = ref(null)
    store.value = inject('store')

    return () => {
      const catched = []
      const infoRef = []

      for (let i = 0; i < store.value.state.dim; i++) {
        catched[i] = new Array(store.value.state.dim)
        infoRef[i] = new Array(store.value.state.dim)
        for (let j = 0; j < store.value.state.dim; j++) {
          infoRef[i][j] = ref(null)
          catched[i][j] = (info) => (infoRef[i][j].value = info)
        }
      }

      return <C catched={catched} infoRef={infoRef} {...props} />
    }
  },
})
