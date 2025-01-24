function Massege({open}){
    console.log(open);
    
    if (!open){
        return(
            <div className='overlay' style={{width:"100%" ,height:"100px",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"50%",left:"0",backgroundColor:"red"}}>

                <div style={{width:"100%" , backgroundColor:"red", color:"white"}}>
                    <div>You are not avialabeldsaffa</div>
                </div>
            </div>
        )
    }else{
        return(
            <div className='overlay' style={{width:"100%" ,height:"100px",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"50%",left:"0",backgroundColor:"green"}}>
                <div style={{width:"2000px" , height:"100px", backgroundColor:"green", color:"white"}}>
                    <div>You are  avialabeldsaffa</div>
                </div>
            </div>
        )
    }

}
export default Massege;