import { createContext, useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productCollection = collection(db, "products");
      const data = await getDocs(productCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      setProducts([...products, { ...product, id: docRef.id }]);
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const productDoc = doc(db, "products", id);
      await updateDoc(productDoc, updatedProduct);
      setProducts(
        products.map((product) =>
          product.id === id ? { ...updatedProduct, id } : product
        )
      );
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const productDoc = doc(db, "products", id);
      await deleteDoc(productDoc);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
