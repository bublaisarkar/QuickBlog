import React from "react";
import { useNavigate } from "react-router-dom";

// 💡 Best Practice: Utility function to safely remove HTML tags
const stripHtmlTags = (htmlString) => {
  if (!htmlString) return "";
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.textContent || tempDiv.innerText || "";
};

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  // 1. Clean the HTML and prepare the text
  const plainDescription = stripHtmlTags(description);
  const maxLength = 80;
  const truncatedDescription = plainDescription.slice(0, maxLength);
  const showEllipsis = plainDescription.length > maxLength;

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
      // Added accessibility roles for better user experience
      role="link"
      tabIndex={0}
    >
      <img src={image} alt={`Image for ${title}`} className="aspect-video" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        
        {/* FIX: Render the safe, plain text */}
        <p className="mb-3 text-xs text-gray-600">
          {truncatedDescription}
          {showEllipsis ? "..." : ""}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;