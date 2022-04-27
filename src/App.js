import profileImage from "./img/profile-image.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>First React App</h1>
      <h2>Author: Olagoke Olorunkosebi</h2>
      <img src={profileImage} alt="profile-image"></img>
    </div>
  );
}

export default App;
