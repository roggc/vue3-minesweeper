import { onMounted, reactive } from 'vue'
import styles from './index.module.css'

export default {
    setup(){
        const state=reactive({
            covered:true,
            mined:Math.random()<0.1
        })
        const clicked=()=>{
            state.covered=false
        }
        return ()=>{
            return  (            
                <div 
                class={(state.covered?styles.covered:styles.uncovered)+' '+styles.general}
                onClick={clicked}>
                {!state.covered&&state.mined&&'🎃'}
                </div>
            )        
        }
    }
}