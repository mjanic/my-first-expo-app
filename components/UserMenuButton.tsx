import { Pressable, Text, StyleSheet, View } from "react-native";
import { NavIcon } from "./navigation/NavIcons";

interface UserMenuButtonProps {
  iconName: string;
  title: string;
}

export const UserMenuButton: React.FC<UserMenuButtonProps> = ({
  iconName,
  title,
}) => {
  return (
    <Pressable style={styles.pressableContainer}>
      <View style={styles.optionIcon}>
        <NavIcon name={iconName} />
      </View>
      <Text style={styles.titleText}>{title}</Text>
      <NavIcon style={styles.arrowIcon} size={18} name="angle-right" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "900",
  },
  optionIcon: {
    backgroundColor: "#D2E7FD",
    padding: 5,
    borderRadius: 5,
    overflow: "hidden",
    width: 40,
    alignItems: "center",
  },
});
