
import './App.css';

function App() {
  const os = ["Android", "Blackbery", "Phone", "window Phone"]

  const mob = ["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System Os</h1>

<div>
  <ul>
    {os.map((e) =>{
      return <li>{e}</li>
    })}
  </ul>
</div>

<h1>Mobile Manufuctures</h1>

<div>
<ul>
{mob.map((e) =>{
  return <li>{e}</li>
})}
</ul>
</div>

      
    </div>
  );
}

export default App;
 