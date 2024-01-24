import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
