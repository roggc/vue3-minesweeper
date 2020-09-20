import styles from './index.module.css'
import Cell from './Cell'
import { onMounted, provide, ref, reactive, inject } from 'vue'
import withCatched from '../../hocs/withCatched'

export default withCatched({
    props:['catched','infoRef'],
    setup(props){
        const dim=30
        const state=reactive({})

        const cells=[]
        for(let i=0;i<dim;i++){ 
            cells[i]=new Array(dim)
            for(let j=0;j<dim;j++){
                cells[i][j]=
                <Cell 
                catched={props.catched[i][j]}
                i={i}
                j={j}
                />
            }
        }  

        provide('store',{state,infoRef:props.infoRef})
        const store=ref(null)
        onMounted(()=>{
            store.value=inject('store')
        })

        onMounted(()=>{
            for(let i=0;i<dim;i++){
                for(let j=0;j<dim;j++){
                    let minesAround=0
                    if(store.value.infoRef[i-1]&&
                        store.value.infoRef[i-1][j-1]&&
                        store.value.infoRef[i-1][j-1].value.state.mined){
                        minesAround++
                    }
                    if(store.value.infoRef[i-1]&&
                        store.value.infoRef[i-1][j]&&
                        store.value.infoRef[i-1][j].value.state.mined){
                        minesAround++
                    }
                    if(store.value.infoRef[i-1]&&
                        store.value.infoRef[i-1][j+1]&&
                        store.value.infoRef[i-1][j+1].value.state.mined){
                        minesAround++
                    }
                    if(store.value.infoRef[i]&&
                        store.value.infoRef[i][j-1]&&
                        store.value.infoRef[i][j-1].value.state.mined){
                        minesAround++
                    }
                    if(store.value.infoRef[i]&&
                        store.value.infoRef[i][j+1]&&
                        store.value.infoRef[i][j+1].value.state.mined){
                        minesAround++
                    }
                    if(store.value.infoRef[i+1]&&
                        store.value.infoRef[i+1][j-1]&&
                        store.value.infoRef[i+1][j-1].value.state.mined){
                        minesAround++
                    }
                    if(store.value.infoRef[i+1]&&
                        store.value.infoRef[i+1][j]&&
                        store.value.infoRef[i+1][j].value.state.mined){
                        minesAround++
                    }
                    if(store.value.infoRef[i+1]&&
                        store.value.infoRef[i+1][j+1]&&
                        store.value.infoRef[i+1][j+1].value.state.mined){
                        minesAround++
                    }
                    store.value.infoRef[i][j].value.state.minesAround=minesAround
                }
            }
        })

        return ()=>{
            return (
                cells.map(row=><div class={styles.row}>{row}</div>)
            )
        }
    }
})