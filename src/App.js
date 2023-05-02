import Quiz from "./Components/Quiz";
import Login from "./Components/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
  
   <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login />}>
          <Route path="Quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
