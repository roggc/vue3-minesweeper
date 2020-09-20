import Minesweeper from '../Minesweeper'
import styles from './index.module.css'

export default {
    setup(){
        return ()=>{
            return (
                <div class={styles.general}>
                    <Minesweeper/>
                </div>
            )
        }
    }
}