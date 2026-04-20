import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";

export default function ProductList({ navigation }: any) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch(console.log);
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { product: item })}
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          >
            <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}