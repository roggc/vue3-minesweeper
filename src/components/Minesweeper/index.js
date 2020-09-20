import styles from './index.module.css'
import Cell from './Cell'

export default{
    setup(){
        return ()=>{
            const dim=10
            const cells=[]
            for(let i=0;i<dim;i++){ 
                cells[i]=new Array(dim)
                for(let j=0;j<dim;j++){
                    cells[i][j]=<Cell/>
                }
            }     
            return (
                cells.map(row=><div class={styles.row}>{row}</div>)
            )
        }
    }
}