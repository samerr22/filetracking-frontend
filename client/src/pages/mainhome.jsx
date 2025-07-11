import React from 'react';

export default function MainHome() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            Formulate Your <br /> Personalized Skincare
          </h1>
          <button className="bg-gray-800 hover:bg-gray-900 transition text-white px-6 py-3 rounded-full">
            Take the Quiz
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?_gl=1*db063q*_ga*MTU5NjQzMDU0NC4xNzQ1NTk4NTE0*_ga_8JE65Q40S6*czE3NTEzNDkzNzQkbzQkZzEkdDE3NTEzNDk0NDgkajUxJGwwJGgw"
            alt="Skincare"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
