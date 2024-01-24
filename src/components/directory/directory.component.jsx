import DirectoryItem from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./directory.styles.jsx";

const Directory = (props) => {
  const { categories } = props;
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </CategoriesContainer>
  );
};

export default Directory;
