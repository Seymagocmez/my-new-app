import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

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
            onPress={() =>
              router.push({
                pathname: "/detail",
                params: { product: JSON.stringify(item) }
              })
            }
            style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
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