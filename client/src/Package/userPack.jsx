import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/items/getPosts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="bg-[#f7f7f7] py-12 px-4 min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-playfair font-extrabold text-center text-[#2c2c2c] mb-2 animate-fadeUp">
          <span className="text-gray-400">{"< "}</span>
          <span className="underline text-[#2c2c2c] decoration-4">
            CodeStarter
          </span>
          <span className="text-gray-400">{" />"}</span>

          <style jsx>{`
            @keyframes fadeUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeUp {
              animation: fadeUp 1s ease-out forwards;
            }
          `}</style>
        </h1>

        <p
          className="text-center text-gray-600 mb-8
         "
        >
          Total Projects: {posts.length}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, idx) => (
            <motion.div
              key={post._id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            >
              <div className="relative group">
                <img
                  src={post.images[0]}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"></div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Optional tag or badge */}
                <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded-full mb-3 self-start">
                  Project
                </span>

                <h2 className="text-lg md:text-xl font-playfair font-semibold mb-2 text-[#2c2c2c]">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 flex-1">{post.Des}</p>

                <div className="mt-auto">
                  <a
                    href={post.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ml-4 ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
