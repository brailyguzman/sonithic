import { FC, ReactNode, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { styleVars } from '../../App.constants';
import { ThemeContext } from '../../context/ThemeContext';

interface TabContainerProps {
    children: ReactNode;
}

const TabContainer: FC<TabContainerProps> = ({ children }) => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext is null');
    }

    const { colors } = themeContext;

    return (
        <View
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: styleVars.gutters,
    },
});

export default TabContainer;
