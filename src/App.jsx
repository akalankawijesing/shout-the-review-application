import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/shout-the-review-application/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
