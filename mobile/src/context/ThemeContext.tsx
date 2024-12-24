import { createContext, FC, ReactNode } from 'react';
import { colors } from '../App.constants';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { IColor } from '../App.types';

interface IThemeProvider {
    children: ReactNode;
}

interface IThemeContext {
    colors: IColor;
    theme: ColorSchemeName;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
    const theme = useColorScheme();

    // TODO: Allow the user to select their preferred theme.

    return (
        <ThemeContext.Provider
            value={{ colors: colors[theme || 'light'], theme: theme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
