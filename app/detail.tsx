import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { product } = useLocalSearchParams();

  const item = JSON.parse(product as string);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />

      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {item.title}
      </Text>

      <Text>{item.description}</Text>

      <Text>${item.price}</Text>

      <Button title="Sepete Ekle" onPress={() => alert("eklendi")} />
    </View>
  );
}