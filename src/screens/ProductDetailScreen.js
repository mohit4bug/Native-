import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { addToCart } from "../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsScreen = () => {

    const dispatch = useDispatch()
    const product = useSelector(state => state.products.selectedProduct)
    const { width } = useWindowDimensions()

    return (
        <View>
            <ScrollView>
                {/* Image Carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled // Aligns closest Image in center
                />

                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>
                        {product.name}
                    </Text>

                    <Text style={styles.price}>
                        ${product.price}
                    </Text>

                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                </View>
            </ScrollView>
            <Pressable style={styles.button} onPress={() => {
                dispatch(addToCart(product))
            }}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({

    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
    },
    button: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default ProductDetailsScreen;