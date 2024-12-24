import { StatusBar } from 'expo-status-bar';
import { FC, useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { styleVars } from './App.constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialIconName } from './App.types';
import Search from './components/Search/Search';
import Library from './components/Library/Library';
import Settings from './components/Settings/Settings';

const Tab = createBottomTabNavigator();

const App: FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext is null');
    }

    const { colors } = themeContext;

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            <StatusBar style="auto" />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName: MaterialIconName;

                            switch (route.name) {
                                case 'Search':
                                    iconName = 'search';
                                    break;
                                case 'Library':
                                    iconName = 'library-music';
                                    break;
                                case 'Settings':
                                    iconName = 'settings';
                                    break;
                                default:
                                    iconName = 'library-music';
                            }

                            return (
                                <MaterialIcons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: colors.accent,
                        tabBarInactiveTintColor: colors.secondary,
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: colors.background,
                            borderTopWidth: 1,
                            borderColor: colors.border,
                        },
                    })}
                >
                    <Tab.Screen name="Library" component={Library} />
                    <Tab.Screen name="Search" component={Search} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: styleVars.gutters,
    },
});

const AppContainer: FC = () => {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
};

export default AppContainer;
