import { Route, Routes } from "react-router-dom";
import SignUp from "./signup/SignUp/SignUp";
import Submit from "./submit/Submit/Submit";

function App() {
  return (
    <main className="min-h-screen bg-charcoalGrey grid place-items-center">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success/:email" element={<Submit />} />
      </Routes>
    </main>
  );
}

export default App;
