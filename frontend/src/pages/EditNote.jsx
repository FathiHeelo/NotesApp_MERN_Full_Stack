import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios.js";

export default function EditNote() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await api.get(`/${id}`);
        setTitle(response.data.title || "");
        setContent(response.data.content || "");
      } catch (err) {
        setError("Unable to load note. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    try {
      setSaving(true);
      await api.put(`/${id}`, { title, content });
      navigate("/");
    } catch (err) {
      setError("Unable to update note. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="empty-state">Loading note...</div>;
  }

  return (
    <div className="form-panel">
      <h2>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="8"
          />
        </label>
        {error && <div className="error-state">{error}</div>}
        <button className="btn btn-primary" type="submit" disabled={saving}>
          {saving ? "Updating..." : "Update Note"}
        </button>
      </form>
    </div>
  );
}
