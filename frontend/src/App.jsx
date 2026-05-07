import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import EditNote from "./pages/EditNote.jsx";
import NoteDetails from "./pages/NoteDetails.jsx";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
