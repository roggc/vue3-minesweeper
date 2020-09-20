import { onMounted, reactive,ref,inject, watch, onUpdated } from 'vue'
import styles from './index.module.css'

export default {
    props:['catched','i','j'],
    setup(props){
        const state=reactive({
            covered:true,
            mined:Math.random()<0.05,
            minesAround:undefined
        })

        onUpdated(()=>{
            if(store.value.infoRef[props.i][props.j].value.state.minesAround>0||
                store.value.infoRef[props.i][props.j].value.state.covered){
                return
            }
            if(store.value.infoRef[props.i-1]&&
                store.value.infoRef[props.i-1][props.j-1]&&
                store.value.infoRef[props.i-1][props.j-1].value.state.covered){
                    store.value.infoRef[props.i-1][props.j-1].value.ref.click()
                }
            if(store.value.infoRef[props.i-1]&&
                store.value.infoRef[props.i-1][props.j]&&
                store.value.infoRef[props.i-1][props.j].value.state.covered){
                    store.value.infoRef[props.i-1][props.j].value.ref.click()
                }
            if(store.value.infoRef[props.i-1]&&
                store.value.infoRef[props.i-1][props.j+1]&&
                store.value.infoRef[props.i-1][props.j+1].value.state.covered){
                    store.value.infoRef[props.i-1][props.j+1].value.ref.click()
                }
            if(store.value.infoRef[props.i]&&
                store.value.infoRef[props.i][props.j-1]&&
                store.value.infoRef[props.i][props.j-1].value.state.covered){
                    store.value.infoRef[props.i][props.j-1].value.ref.click()
                }
            if(store.value.infoRef[props.i]&&
                store.value.infoRef[props.i][props.j+1]&&
                store.value.infoRef[props.i][props.j+1].value.state.covered){
                    store.value.infoRef[props.i][props.j+1].value.ref.click()
                }
            if(store.value.infoRef[props.i+1]&&
                store.value.infoRef[props.i+1][props.j-1]&&
                store.value.infoRef[props.i+1][props.j-1].value.state.covered){
                    store.value.infoRef[props.i+1][props.j-1].value.ref.click()
                }
            if(store.value.infoRef[props.i+1]&&
                store.value.infoRef[props.i+1][props.j]&&
                store.value.infoRef[props.i+1][props.j].value.state.covered){
                    store.value.infoRef[props.i+1][props.j].value.ref.click()
                }
            if(store.value.infoRef[props.i+1]&&
                store.value.infoRef[props.i+1][props.j+1]&&
                store.value.infoRef[props.i+1][props.j+1].value.state.covered){
                    store.value.infoRef[props.i+1][props.j+1].value.ref.click()
                }
        })

        const clicked=()=>{
            store.value.infoRef[props.i][props.j].value.state.covered=false
        }

        onMounted(()=>{
            props.catched.bind(null,{state,ref:cellRef})()
        })

        onMounted(()=>{
            store.value=inject('store')
        })
        const store=ref(null)

        const cellRef=ref(null)

        return ()=>{
            return  (            
                <div 
                class={(state.covered?styles.covered:styles.uncovered)+' '+styles.general}
                onClick={clicked}
                ref={cellRef}>
                {store.value&&(!store.value.infoRef[props.i][props.j].value.state.covered)&&
                    store.value.infoRef[props.i][props.j].value.state.mined&&'🎃'}
                {store.value&&(!store.value.infoRef[props.i][props.j].value.state.covered)&&
                    !store.value.infoRef[props.i][props.j].value.state.mined&&
                    store.value.infoRef[props.i][props.j].value.state.minesAround>0&&
                    store.value.infoRef[props.i][props.j].value.state.minesAround}
                </div>
            )        
        }
    }
}