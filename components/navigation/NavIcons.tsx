import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function NavIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof FontAwesome5>["name"]>) {
  return (
    <FontAwesome5 size={24} style={[{ marginBottom: 0 }, style]} {...rest} />
  );
}
