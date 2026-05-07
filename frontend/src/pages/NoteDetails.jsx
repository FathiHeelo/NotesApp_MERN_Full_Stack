import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/axios.js";

export default function NoteDetails() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await api.get(`/${id}`);
        setNote(response.data);
      } catch (err) {
        setError("Unable to load note details.");
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, [id]);

  if (loading) {
    return <div className="empty-state">Loading note details...</div>;
  }

  if (error) {
    return <div className="error-state">{error}</div>;
  }

  if (!note) {
    return <div className="empty-state">Note not found.</div>;
  }

  return (
    <div className="detail-panel">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className="detail-actions">
        <Link className="btn btn-secondary" to="/">
          Back
        </Link>
        <Link className="btn btn-primary" to={`/edit/${note._id || note.id}`}>
          Edit Note
        </Link>
      </div>
    </div>
  );
}
