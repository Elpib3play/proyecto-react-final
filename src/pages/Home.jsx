import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoryList from "../components/CategoryList/CategoryList";

const Home = () => {
  return (
    <>
      
      <main className="site-page section">
        <div className="container">
          <CategoryList />
          <hr className="line" />
          <ItemListContainer sectionTitle="Productos populares" />
          <hr className="line home-line" />
          <ItemListContainer sectionTitle="Productos destacados" />
        </div>
      </main>
    </>
  );
};

export default Home;
