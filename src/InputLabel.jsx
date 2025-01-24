import { useState } from 'react';
import './InputLabel.css'
import Massege from './Massege';

function InputLabel(){


    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [age,setAge]=useState("")
    const [check,setCheck]=useState(false)
    const [salary,setSalary]=useState("")
    const [showingDialog, setShowingDialog] = useState(false)
    const[open,setOpen]=useState(false)

    function handleClik(e){
        e.preventDefault()
        setShowingDialog(true);
        if(!name||phone.toString().length<10||!age||!salary){ 
            setOpen(false)
        }else{
            if (age>17&&age<100){
                setOpen(true)
            }else{
                setOpen(false)
            }
        }
    }


    const handlePhoneChange = event => {
        let v=event.target.value.toString();
        if (v.length>12||v.length<=10){
            setPhone(v.slice(0, 12));
        }
    };


    
    return (
        
        <div style={{width:"50%",height:"70%",borderRadius:"10px",backgroundColor:"rgb(72, 1, 131)",color:"white",margin:"auto" }}>
            <form className='form' onSubmit={handleClik} style={{opacity: showingDialog? "50%":"100%"}}>

            <header style={{paddingTop:"10px"}}>
                <h2>Requesting a Loan</h2>
                <hr style={{width:"90%"}} />
            </header>
                <div className='Label'>
                    <label htmlFor="">Name:</label>
                    <input type="text" value={name}  name="" id="" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='label'>
                    <label htmlFor="" >Phone Number:</label>
                    <input type="number" onChange={handlePhoneChange} value={phone} name="" id="" />
                </div>
                <div className='label'>
                    <label htmlFor="">Age:</label>
                    <input type="number" name=""  value={age} id="" onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className='label' style={{marginTop:"20px"}}>
                    <label htmlFor="">Are you an employee:</label>
                    <input style={{width:"50px", height:"50px"}} value={check} type="checkbox" onChange={(e)=>setCheck(e.target.checked)} name="" id="" />
                </div>
                <div className='label'>
                    <label htmlFor="">Salary:</label>
                    <input type="text" name="" id="" onChange={(e)=>setSalary(e.target.value)}/>
                </div>

                <div className='label' style={{marginTop:"20px"}}>
                    <input className='button'  type="submit"  />
                </div>
            </form>

                 { showingDialog&& <Massege open={open} />} 
            
            </div>
        
  
    )
}
export default InputLabel;