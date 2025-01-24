import { useState } from 'react';
import './InputLabel.css'

    function clickit(name,phone,age,salary){
        if(!name||!phone||!age||!salary){
            console.log("not corrct")
            return false;
        }else{
            console.log("corrct")
            return true;
        }
        
    }
function InputLabel(){


    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [age,setAge]=useState("")
    const [check,setCheck]=useState(false)
    const [salary,setSalary]=useState("")


    function handleClik(e){
        e.preventDefault()
        clickit(name,phone,age,salary)

    }
    const handlePhoneChange = event => {
        let v=event.target.value.toString();
        if (v.length>12||v.length<=10){
            setPhone(v.slice(0, 12));
        } 
    };


    
    return (
        <div>
            <form className='form' onSubmit={handleClik}>
                <div className='Label'>
                    <label htmlFor="">Name:</label>
                    <input type="text" value={name} maxLength={10} name="" id="" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='label'>
                    <label htmlFor="" >Phone Number:</label>
                    <input type="number" onChange={handlePhoneChange} value={phone} name="" id="" />
                </div>
                <div className='label'>
                    <label htmlFor="">Age:</label>
                    <input type="number" name="" min={18} max={99} value={age} id="" onChange={(e)=>setAge(e.target.value)} />
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
                    <input className='button'  type="submit" />
                </div>
            </form>
            <div className='overlay'>

                <div></div>
                
            </div>
        </div>
  
    )
}
export default InputLabel;