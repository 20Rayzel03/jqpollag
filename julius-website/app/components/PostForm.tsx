import { useState } from "react";


export default function PostForm() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                desc,
                content,
            }),
        });
        alert("Post created successfully!");
        setTitle("");setDesc("");setContent("");
    };

    return ( 

    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Neuen Beitrag erstellen</h2>
      <input
        type="text"
        placeholder="Titel"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kurze Beschreibung"
        className="w-full p-2 border rounded"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <textarea
        placeholder="Inhalt des Beitrags"
        className="w-full p-2 border rounded h-32"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Beitrag speichern
      </button>
    </form>
    );
}
// This component allows users to create a new post with a title, description, and content.