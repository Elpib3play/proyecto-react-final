import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoryList from "../components/CategoryList/CategoryList";

const Products = () => {
  return (
    <main className="site-page section">
      <section className="container">
        <CategoryList />
        <hr className="line" />
        <ItemListContainer />
      </section>
    </main>
  );
};

export default Products;
