import React from "react";

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      {/* FIX: Corrected typo 4x1 to 4xl */}
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a blog!</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      
      {/* FIX: Corrected typo max-w-2x1 to max-w-2xl and adjusted height */}
      <form className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="email" // 💡 Enhancement: Use type="email" for better mobile keyboard/validation
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit"
          // FIX: Corrected typo rounded-1-none to rounded-l-none
          // Adjusted the button's rounded class to match the input's corner
          className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;