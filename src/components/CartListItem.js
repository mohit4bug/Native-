import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { incrementQuantity, decrementQuantity } from "../redux/cartSlice"
import { useDispatch } from "react-redux";

const CartListItem = ({ cartItem }) => {

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={() => dispatch(decrementQuantity(cartItem))}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={() => dispatch(incrementQuantity(cartItem))}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>${cartItem.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default CartListItem;
