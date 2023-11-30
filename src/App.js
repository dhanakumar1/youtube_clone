
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
