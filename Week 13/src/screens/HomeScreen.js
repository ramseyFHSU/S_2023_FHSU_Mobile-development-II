import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import products from "../data/products";

export default function HomeScreen({ navigation }) {
  const navigateToProductDetails = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToProductDetails(item)}>
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToProductDetails(item)}>
            <View style={styles.cardContainer}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>
                  {item.description}
                </Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#F2F2F2",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  productImage: {
    width: "30%",
    height: 100,
    resizeMode: "cover",
  },
  productDetails: {
    flex: 1,
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6347",
  },
});
