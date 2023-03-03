import Profile from './Profile/Profile';
import data from './data'

function App() {
  const handleEvent = (fullName) => {
    alert(`${fullName}`);
  };
  return (
    <div className="App" style ={{color:"black",textAlign:"center"}}>
       <Profile data={data}/>
       <button onClick={handleEvent}>User</button>
    </div>
  );
}

export default App;
