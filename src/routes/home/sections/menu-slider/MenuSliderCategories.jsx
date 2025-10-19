const MenuSliderCategories = ({ category, setActiveCategory }) => {
  return (
    <li>
      <button
        aria-label={`Cambiar a categoria ${category.name}`}
        onClick={() => setActiveCategory(category.name)}>
        {category.name}
      </button>
    </li>
  );
};

export default MenuSliderCategories;

