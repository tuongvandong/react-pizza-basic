import { useState } from "react";

const App = () => {
  const [name, setName] = useState("React Dev");
  const handelChangname = () => {
    setName("Tuong Dev");
  };

  return (
    <div className="App">
      <div>{name}</div>

      <button onClick={handelChangname}>Bấm vào đây</button>
    </div>
  );
};

export default App;
