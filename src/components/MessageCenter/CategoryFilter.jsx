export default function CategoryFilter({
    category,
    first,
    last,
    currentCategory,
    setCurrentCategory,
  }) {
    return (
      <button
        title={category.title}
        className={`w-full flex flex-col md:flex-row group ml-0 p-2 text-left text-ui-gray bg-white border-b border-ui-gray-medium-light  no-underline hover:no-underline hover:bg-ui-blue-light ${
          currentCategory === category.id ? "ui-message-current" : ""
        } ${first ? "rounded-t-lg" : ""} ${last ? "rounded-b-lg" : ""}`}
        onClick={() => setCurrentCategory(category.id)}
      >
        <span className="p-2">
          <svg
            className="ui-icon w-4 h-4 group-hover:text-ui-blue"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <use href={category.icon}></use>
          </svg>
        </span>
        <span className="py-2 flex-grow">
          <span className="block text-black text-sm font-semibold no-underline group-hover:text-black group-hover:underline">
            {category.title}
          </span>
          <span className="hidden lg:block text-ui-gray text-xs font-light no-underline group-hover:text-gray">
            {category.desc}
          </span>
        </span>
        {category.unread > 0 && (
          <span className="p-1">
            <span className="text-xxs font-semibold p-1 px-2 rounded-xl bg-ui-gray text-white">
              {category.unread}
            </span>
          </span>
        )}
      </button>
    );
  }
  