import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [yContainer, setyContainer] = useState("");
  const [mContainer, setmContainer] = useState("");
  const [newData,setnewData] = useState([]);
  const Submit =(e)=>{
    e.preventDefault();
    if(Fname && Lname && Email && Password && CPassword && yContainer && mContainer){
      const dataEntry={Fname,Lname,Email,Password,CPassword,yContainer,mContainer};
    setnewData([dataEntry]);
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setCPassword("");
    setyContainer("");
    setmContainer("");
  }
  else{
    alert("fill the form")
  } 
  }
  return (
    <div className='Container'>
        <form onSubmit={Submit}>
          <h2>Registration Form</h2>
            <div className='innerContainer'>
              <div className='nameContainer'>
                <div className='rightContainer'>
                  <label>First name</label>
                  <div className='fnameinputC'>
                    <input type="text" className='Fname' name='Fname' id='Fname' value={Fname} onChange={(e)=>setFname(e.target.value)}/>
                  </div>
                  
                </div>     
                <div className='leftContainer'>
                  <label>Last name</label>
                  <input type="text" className='Lname' name='Lname' id='Lname' value={Lname} onChange={(e)=>setLname(e.target.value)}/>
                </div>
              </div>  
              <div className='eContainer'>
                <label>Email</label>
                <input type="text" className='Email' name='Email' id='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className='pContainer'>
                <div className='pleftContainer'>
                  <label>Password</label>
                  <div className='plcinput'>
                    <input type="password" className='Password' name='Password' id='Password' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className='prightContainer'>
                <label>Confirm Password</label>
                <div className='prcinput'>
                  <input type="password" className='CPassword' name='CPassword' id='CPassword' value={CPassword} onChange={(e)=>setCPassword(e.target.value)}/>
                </div>
                </div> 
              </div>
              <div className='ddContainer'>
                <div className='yearContainer'>
                  <label>Year Passed</label>
                  <select className='yContainer' name='yContainer' id='yContainer' value={yContainer} onChange={(e)=>setyContainer(e.target.value)}>
                    <option defaultValue>--select--</option>
                    <option value="2020" key="">2020</option>
                    <option value="2021" key="">2021</option>
                    <option value="2022" key="">2022</option>
                    <option value="2023" key="">2023</option>
                    <option value="2024" key="">2024</option>
                  </select>
                </div>
                <div className='monthContainer'>
                  <label>Month Passed</label>
                  <select className='mContainer' id='mContainer' name='mContainer' value={mContainer} onChange={(e)=>setmContainer(e.target.value)}>
                    <option defaultValue>--select--</option>
                    <option value="January" key="">January</option>
                    <option value="Feburary" key="">Feburary</option>
                    <option value="March" key="">March</option>
                    <option value="April" key="">April</option>
                    <option value="May" key="">May</option>
                    <option value="June" key="">June</option>
                    <option value="July" key="">July</option>
                    <option value="Augest" key="">Augest</option>
                    <option value="September" key="">September</option>
                    <option value="October" key="">October</option>
                    <option value="November" key="">November</option>
                    <option value="December" key="">December</option>
                  </select>
                </div>
              </div>  
            </div>
            
            <div className='btnContainer'>
            <button className='btn-submit' name='btn-submit' id='btn-submit'>Register</button>
          </div>
        </form>
        <div className='opContainer' id='opContainer' style={{whiteSpace:'pre'}}>
          {newData.map((values)=>{
            return(
              <div className='output'>
                <p>firstName : "{values.Fname}"</p>
                <p>lastName : "{values.Lname}"</p>
                <p>Email : "{values.Email}"</p>
                <p>yearPassedOut : "{values.yContainer}"</p>
                <p>monthPassedOut : "{values.mContainer}"</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default App