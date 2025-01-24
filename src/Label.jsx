import InputLabel from "./InputLabel";

function Label(){
    return (
        <div style={{width:"50%",height:"70%",borderRadius:"10px",backgroundColor:"rgb(72, 1, 131)",color:"white",margin:"auto"  }}>
            <header style={{paddingTop:"10px"}}>
                <h2>Requesting a Loan</h2>
                <hr style={{width:"90%"}} />
            </header>
            <InputLabel/>
        </div>
    )
}
export default Label;