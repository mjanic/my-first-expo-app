import { Tabs } from "expo-router";
import { NavIcon } from "@/components/navigation/NavIcons";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 80 },
        headerShown: false,
        tabBarActiveTintColor: "#0a7ea4",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20, // Makes the background circular
                backgroundColor: focused ? "#D2E7FD" : "transparent", // Circle background only when focused
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <NavIcon name="home" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20, // Makes the background circular
                backgroundColor: focused ? "#D2E7FD" : "transparent", // Circle background only when focused
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <NavIcon name="chart-line" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20, // Makes the background circular
                backgroundColor: focused ? "#D2E7FD" : "transparent", // Circle background only when focused
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <NavIcon name="envelope" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20, // Makes the background circular
                backgroundColor: focused ? "#D2E7FD" : "transparent", // Circle background only when focused
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <NavIcon name="user" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
