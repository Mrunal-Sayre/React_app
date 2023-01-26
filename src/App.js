import Add from "./components/Add";
import Students from "./components/Students";
import Sub from "./components/Sub";
import Mul from "./components/Mul";
import Nav from "./components/Nav";
import UserListing from "./components/UserListing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  var student1 = {
    name: "Mrunal",
    age: 23,
    city: "Nagpur"
  }
  
  return (
      <>
      
        <UserListing />
        <h1>Hello Mrunal</h1>
        <h1>Welcome to React App</h1>
        <h1>
          {5 * 5}  
        </h1>    
        <Add x = {5} y = {10} />  
        <Sub x = {10} y = {5} />
        <Mul />
        <Students data={student1}/>
        <Students data={{name:"Roshan", age:20, city:"Mumbai"}}/>
        <div style={{margin: "auto", width: "50%"}}>
        <BrowserRouter>
          <Nav/>
          <Routes>
            {/* <Route path='/' element=}/> */}
            <Route path='/' element={<Add/>}/> &nbsp;
          </Routes>
          <Routes>
            <Route path='/sub' element={<Sub/>}/>&nbsp;
          </Routes>
          <Routes>
            <Route path='/mul' element={<Mul/>}/>
          </Routes>
        </BrowserRouter>
        </div>
       
        </>
      );
}

export default App;
