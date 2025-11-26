import React from "react";

const RecipeCategoryCard = ({
  title,
  description,
  imageUrl,
  recipeCount,
  onClick,
  borderVariant = "default",
}) => {
  // Define border radius classes using ternary operator
  const borderClass =
    borderVariant === "variant1"
      ? "rounded-tl-sm rounded-br-sm rounded-tr-3xl rounded-bl-3xl border-t-2 border-orange-300/80"
      : borderVariant === "variant2"
      ? "rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-b-2 border-orange-300/80 "
      : "rounded-3xl";

  return (
    <div
      className={`bg-white flex justify-center items-center flex-col ${borderClass} shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer p-4 `}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
        <svg
          className="w-6 h-6 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-xs mb-2">{recipeCount} recipes</p>
      </div>
    </div>
  );
};

export default RecipeCategoryCard;
