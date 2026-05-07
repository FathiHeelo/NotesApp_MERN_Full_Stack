import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios.js";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNotes() {
      try {
        setLoading(true);
        const response = await api.get("/");
        setNotes(response.data || []);
      } catch (err) {
        setError("Unable to load notes. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this note? This action cannot be undone.");
    if (!confirmed) return;

    try {
      await api.delete(`/${id}`);
      setNotes((current) => current.filter((note) => note._id !== id && note.id !== id));
    } catch (err) {
      setError("Failed to delete note. Please try again.");
    }
  };

  if (loading) {
    return <div className="empty-state">Loading notes...</div>;
  }

  if (error) {
    return <div className="error-state">{error}</div>;
  }

  if (!notes.length) {
    return (
      <div className="empty-state">
        <h2>No notes yet</h2>
        <p>Create your first note using the button above.</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <article key={note._id || note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.content?.slice(0, 140) || "No content"}</p>
          <div className="card-actions">
            <Link className="btn btn-secondary" to={`/notes/${note._id || note.id}`}>
              View
            </Link>
            <Link className="btn btn-secondary" to={`/edit/${note._id || note.id}`}>
              Edit
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(note._id || note.id)}>
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
