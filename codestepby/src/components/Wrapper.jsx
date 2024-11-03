function Wrapper({children,color}){
    return(
        <div style={{border:'2px solid green',color:color,width:'600px',textAlign:'center',margin:'10px',background:'red'}}>
            {children}
        </div>
    )
}
export default Wrapper;