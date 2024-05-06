function App() {
  function handleNameChange() {
    const names = ["Earn","Grow","Give"]
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <div className="App">
      <h1>Let's {handleNameChange()} money</h1>
    </div>
  );
}

export default App;
