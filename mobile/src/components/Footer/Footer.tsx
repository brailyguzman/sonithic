import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import { buttons } from './Footer.constants';

const Footer = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext is null');
    }

    const { colors } = themeContext;

    return (
        <View
            style={[
                styles.footer,
                {
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                },
            ]}
        >
            {buttons.map((button) => (
                <TouchableOpacity key={button.label} style={styles.button}>
                    <MaterialIcons
                        name={button.icon}
                        size={24}
                        color={colors.accent}
                    />
                    <Text style={[styles.label, { color: colors.text }]}>
                        {button.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        borderTopWidth: 2,
    },
    button: {
        alignItems: 'center',
    },
    label: {
        marginTop: 4,
        fontSize: 12,
    },
});

export default Footer;
