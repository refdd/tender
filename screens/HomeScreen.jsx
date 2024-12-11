import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="go to chate Screen"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      />
    </View>
  );
};

export default HomeScreen;
