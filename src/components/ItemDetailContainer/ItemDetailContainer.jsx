import "./ItemDetailContainer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../services/mockAsyncService.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    return product;
  };


  useEffect(() => {
    getProductById().then((res) => setProductData(res));
  }, [id]);

  return (
    <section className="item-detail-container">
      <ItemDetail data={productData} />
    </section>
  );
};

export default ItemDetailContainer;
