import { StyleSheet, View, SafeAreaView, Image, Text } from "react-native";
import { UserMenuButton } from "@/components/UserMenuButton";

export default function User() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        gap: 15,
        backgroundColor: "white",
      }}
    >
      <View style={styles.avatarSection}>
        <Image
          style={styles.avatarImage}
          source={require("@/assets/images/blue-lady-avatar.png")}
        />
        <View style={styles.avatarText}>
          <Text style={styles.userNameText}>Lisa Richardson</Text>
          <Text>Environmental meteorologist</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <UserMenuButton iconName="user-friends" title="Personal Data" />
      <UserMenuButton iconName="envelope" title="Messages" />
      <UserMenuButton iconName="bell" title="Notifications" />
      <UserMenuButton iconName="map-marker-alt" title="Location" />
      <UserMenuButton iconName="users" title="Community" />
      <View style={styles.separator} />
      <UserMenuButton iconName="user-friends" title="FAQs" />
      <UserMenuButton iconName="cog" title="Settings" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "90%",
    marginVertical: 10,
  },
  avatarImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  avatarSection: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  avatarText: {
    padding: 12,
    justifyContent: "space-between",
  },
  userNameText: {
    fontSize: 15,
    fontWeight: "900",
  },
});
