import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import DataEntries from './components/DataEntries';

//getting data from local storage
const getDataLocalStorage= () => {
  const entries = localStorage.getItem('data');
  if(entries){
    return JSON.parse(entries);
  }
  else{
    return [];
  }
}

function App() {
  //Array of objects for storing data
  const [data, setData]= useState(getDataLocalStorage());

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [city, setCity]= useState("");

  //Function for Submitting Data
  const handleAddData= (e)=> {
    e.preventDefault();
    //Creating an object for storing data
    let entry={
      name,
      email,
      city
    }
    setData([...data, entry])
    setName("");
    setEmail("");
    setCity("");

  }

  //Deleting from Local Storage
  const deleteEntry = (email) => {
    console.log(email);
    const updatedData= data.filter((element, index)=> {
      return element.email !== email
    })
    setData(updatedData);
  }

  //saving data in local storage
  useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data));
  },[data])

  return (
   <div className="wrapper">
    <h1>Data Entery Form</h1>
    
    <div className= "main">
      <div className="form-container">
      <p>Add your data to Local Storage</p>
        <form  autoComplete="off" className="form-group">
          <label>Name</label>
          <input className="form-control" type="text" required value={name} onChange={e=>setName(e.target.value)}
           ></input>
          <br></br>

          <label>Email</label>
          <input className="form-control" type="email" required value={email} onChange={e=>setEmail(e.target.value)}
         ></input>
          <br></br>

          <label>City</label>
          <input className="form-control" type="text" required value={city} onChange={e=>setCity(e.target.value)}
          ></input>
          <br></br>
          <button onClick={handleAddData} className="btn" type="submit">Add</button>
        </form>
      </div>

      <div className="view-container">
      <p>View Data</p>
        {data.length >0 && <>
          <div className="table-responsive">
          
            <table className="table">
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    City
                  </th>
                </tr>
              </thead>
              <tbody>
                <DataEntries data={data} deleteEntry={deleteEntry}/>
              </tbody>
            </table>
          </div>
          </>}
        {/* {data.length <1 ? "No data" : null} */}
        {data.length <1 && <div>No data yet</div>}
      </div>

    </div>
   </div>
  );
}

export default App;