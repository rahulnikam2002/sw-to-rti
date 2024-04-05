import { Button, StatusBar } from "react-native";
import { Text, View } from "react-native";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, { useAnimatedStyle, interpolate } from "react-native-reanimated";
import { IconButton } from "../../../Components/Icons/Icon";
import { MediumText, SmallHeadingText, SmallText, SubHeadingText } from "../../../Components/Text/Headings/Headings";
import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/constants/fonts/fonts";
import { BottomTabs } from "../../../Components/NavigationComponents/BottomTabs/BottomTabs";
import { Colors } from "../../../utils/constants/colors/colors";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth/auth.context";

import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    const { getUserDetailsWithToken } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState();

    // navigation
    const navigation = useNavigation();
    const drawerProgress = useDrawerProgress();

    const viewStyles = useAnimatedStyle(() => {
        const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
        const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 20]);
        return {
            transform: [{ scale }],
            borderRadius
        };
    });

    const getUserDetails = async () => {
        const details = await getUserDetailsWithToken();
        if (!details) {
            setUserDetails(null);
            logoutUser();
            return;
        }
        return details;
    };

    const getUserDetailsFromStore = async () => {
        const details = await getUserDetails();
        setUserDetails(details);
    };

    useEffect(() => {
        getUserDetailsFromStore();
    }, []);

    return (
        <Animated.View style={[viewStyles, styles.homeMain]}>
            <StatusBar backgroundColor={Colors.bgBlack} />
            <View style={{ height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text>Hello {userDetails?.userName}, You can start working on this app</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <BottomTabs />
            </View>
        </Animated.View>
    );
};

export const HomeHeader = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <IconButton
                name="menu-outline"
                size={25}
                type="ionicon"
                onPress={() => navigation.toggleDrawer()}
            />
            <SmallHeadingText
                sx={{
                    fontFamily: fonts.Montserrat[600],
                    position: "relative",
                    top: 5
                }}>
                Smart Todo
            </SmallHeadingText>
            <View style={{ flexDirection: "row" }}>
                <IconButton
                    name="notifications-outline"
                    size={25}
                    type="ionicon"
                    onPress={() => navigation.navigate("cartScreen")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative"
    },
    homeMain: {
        height: "100%",
        backgroundColor: "white"
    },
    bottomTabs: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        paddingBottom: 5,
        borderTopColor: Colors.backgroundWhite,
        borderTopWidth: 1
    },
    bannerArea: {
        marginVertical: 10
    },
    lastSection: {
        marginBottom: 80
    },
    bottomSheetBody: { width: "100%", paddingHorizontal: 20, paddingVertical: 10 },
    bottomSheetBodyBtns: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    speedDail: {
        backgroundColor: Colors.bgBlack,
        alignSelf: "flex-start",
        height: 55,
        width: 55,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 70,
        right: 20,
        zIndex: 10
    },
    recentTodos: {
        paddingHorizontal: 15,
        marginTop: 8
    },
    TodoGroupBoxContainer: {
        paddingHorizontal: 15,
        marginTop: 8,
        marginBottom: 15
    }
});

/**
 * 
 * 
 * 
 * 
                <View style={styles.speedDail}>
                    <TouchableOpacity
                        onPress={() => {
                            handleOpenBottomSheet();
                        }}>
                        <Icon
                            type="ionicon"
                            name="add-outline"
                            color={Colors.white}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>


                 {/* <View
                    style={
                        snapToIndex && {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "100%"
                        }
                    }>
                    <BottomSheet
                        snaps={["35", "35"]}
                        snapToIndex={snapToIndex}
                        setSnapToIndex={setSnapToIndex}>
                        <BottomSheetHeader
                            closeBottomSheet={setSnapToIndex}
                            heading="What you want to do?"
                        />

                        <View style={styles.bottomSheetBody}>
                            <TouchableOpacity
                                onPress={() => handleTodoScreenRedirection("singleTodo")}
                                activeOpacity={0.5}
                                style={[styles.bottomSheetBodyBtns, { backgroundColor: Colors.bgBlack }]}>
                                <MediumText
                                    color={Colors.white}
                                    sx={{ fontFamily: fonts.Montserrat[500] }}>
                                    Create single task
                                </MediumText>

                                <View>
                                    <Icon
                                        type="ionicon"
                                        name="chevron-forward-outline"
                                        color={Colors.white}
                                    />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleTodoScreenRedirection("project")}
                                activeOpacity={0.5}
                                style={[styles.bottomSheetBodyBtns, { backgroundColor: Colors.bgBlack }]}>
                                <MediumText
                                    color={Colors.white}
                                    sx={{ fontFamily: fonts.Montserrat[500] }}>
                                    Track new project
                                </MediumText>
                                <View>
                                    <Icon
                                        type="ionicon"
                                        name="chevron-forward-outline"
                                        color={Colors.white}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </BottomSheet>
                </View> 
 */
