import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tiger from "../../assets";

import { Cart } from "../context/CartContext";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addItemToCart } = Cart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity });
    setQuantity(1);
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setQuantity((prev) => prev - 1)}
            disabled={quantity === 1}
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setQuantity((prev) => prev + 1)}
          >
            <MaterialCommunityIcons name="plus" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF6347",
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: "#FF6347",
    borderRadius: 20,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ProductDetailsScreen;
