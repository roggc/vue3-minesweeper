import {ref} from 'vue'

export default C=>({
    setup(props){
        const dim=30
        const catched=[]
        const infoRef=[]
        for(let i=0;i<dim;i++){
            catched[i]=new Array(dim)
            infoRef[i]=new Array(dim)
            for(let j=0;j<dim;j++){
                infoRef[i][j]=ref(null)
                catched[i][j]=info=>infoRef[i][j].value=info
            }
        }
        return()=>{
            return (
                <C 
                catched={catched}
                infoRef={infoRef}
                {...props}/>
            )
        }
    }
})