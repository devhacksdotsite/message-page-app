export default function MobileCategoryFilter({
    category,
    currentCategory,
    setCurrentCategory,
  }) {
    return (
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            checked={currentCategory === category.id}
            className="mr-2"
            onChange={() => {
              setCurrentCategory(category.id);
            }}
          />
          {category.title}
        </label>
      </div>
    );
  }
  