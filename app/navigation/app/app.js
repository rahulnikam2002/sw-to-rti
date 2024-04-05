import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigation } from "../../Components/NavigationComponents/Drawer/Drawer";
import { useGoogleFonts } from "../../Hooks/Fonts/useFonts";
import { useState } from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { IconButton } from "../../Components/Icons/Icon";
import { MediumText } from "../../Components/Text/Headings/Headings";
import { fonts } from "../../utils/constants/fonts/fonts";
import { SelectAvatarScreen } from "../../screens/app/selectAvatar/app";
import { BottomTabs } from "../../Components/NavigationComponents/BottomTabs/BottomTabs";
import { Icon } from "@rneui/base";

const Stack = createStackNavigator();

export const App = () => {
    const { fontError, fontsLoaded } = useGoogleFonts();
    const [fontLoading, setFontLoading] = useState(fontsLoaded);

    useEffect(() => {
        if (fontsLoaded) {
            setFontLoading(true);
        }
    }, [fontsLoaded]);

    return fontLoading ? (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
            <Stack.Screen
                name="customDrawer"
                component={DrawerNavigation}
            />
        </Stack.Navigator>
    ) : (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: "100%"
            }}>
            <ActivityIndicator
                size={50}
                color={"#000"}
            />
        </View>
    );
};
