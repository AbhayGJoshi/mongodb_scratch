// Frontend code 
// Filename - App.js
// Filename - App.js
//video ur - https://www.youtube.com/watch?v=WJNSNFJOaWU
import { useEffect, useState } from 'react';
import "./App.css";


function App() {
    const [name, setName] = useState("");
    const [userList, setUserList] = useState();
    const [email, setEmail] = useState("");

    useEffect(()=>{
        getUsers();
    },[(userList)]);

    
    let form={name:"", email:""};
    const handleOnSubmit=async(e)=>{
        e.preventDefault();
       const response=await fetch('http://localhost:8080/user',{
            method: 'POST',
            body: JSON.stringify( form ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data= await response.json();
        // console.log(data);    
        setUserList(...userList, data) ;           
    }    

    const getUsers=async()=>{
       const response=await fetch('http://localhost:8080/user',{
            method: 'GET',
        });
        const data= await response.json();
        console.log(data);    
        setUserList(...userList, data) ; 
   }    

return (
    <div className="formContainer">

        <form action="" className='formCss'>
        <h3>This is React WebApp: MongoDB </h3>

            <input type="text" placeholder="enter your name"  className="inputCss"
            value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="enter your email" className="inputCss"
            value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="buttonCss"
            onClick={handleOnSubmit}>Submit</button>
        </form>
        <div>
        <ul>
            <li>UserName---UserEmail</li>
        {userList && userList.map(user=><li key={user._id}>{user.UserEmail},{user.UserName} </li>)}
        </ul>
        </div>

        </div>
);
}
export default App;


// axios({
//   // Endpoint to send files
//   url: "http://localhost:8080/files",
//   method: "POST",
//   headers: {
//       // Add any auth token here
//       authorization: "your token comes here",
//   },

//   // Attaching the form data
//   data: formData,
// })
//   // Handle the response from backend here
//   .then((res) => {})

//   // Catch errors if any
//   .catch((err) => {}