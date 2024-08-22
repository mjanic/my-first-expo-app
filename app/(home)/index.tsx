import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home page.</Text>
      <Link href="/user" asChild>
      <Pressable>
        <Text>Profile</Text>
      </Pressable>
    </Link>
    </View>
  );
}