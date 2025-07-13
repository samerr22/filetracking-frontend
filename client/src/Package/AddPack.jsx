import React, { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([""]); // start with one input field
  const [Des, setDes] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [message, setMessage] = useState("");

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const addImageField = () => {
    setImages([...images, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || images.length === 0 || images.some((img) => img.trim() === "")) {
      setMessage("Title and at least one valid image URL are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/items/addPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, images, Des, youtubeLink, gitLink }),
      });

      if (res.ok) {
        setMessage("✅ Post created successfully!");
        // reset form
        setTitle("");
        setImages([""]);
        setDes("");
        setYoutubeLink("");
        setGitLink("");
      } else {
        const errorText = await res.text();
        setMessage(`❌ Failed: ${errorText}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-3xl font-playfair font-bold mb-6 text-center text-blue-600">Add New Post</h1>

      {message && (
        <p className="mb-4 text-center text-sm font-medium text-red-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Description</label>
          <textarea
            value={Des}
            onChange={(e) => setDes(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Image URLs</label>
          {images.map((img, index) => (
            <input
              key={index}
              type="text"
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder={`Image URL ${index + 1}`}
              className="w-full mb-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="text-blue-600 hover:underline text-sm"
          >
            + Add another image
          </button>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">YouTube Link</label>
          <input
            type="text"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">GitHub Link</label>
          <input
            type="text"
            value={gitLink}
            onChange={(e) => setGitLink(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
