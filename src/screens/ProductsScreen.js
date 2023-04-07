import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProduct } from "../redux/productSlice"


const ProductsScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Pressable onPress={() => {
                    dispatch(setSelectedProduct(item))
                    navigation.navigate("Product Details")
                }} style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </Pressable>
            )}
            numColumns={2}
        />
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1
    },
    itemContainer: {
        width: "50%",
        padding: 1
    }
})