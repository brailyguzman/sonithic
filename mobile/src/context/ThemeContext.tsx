import { createContext, FC, ReactNode, useState } from 'react';
import { colors } from '../App.constants';
import { Appearance } from 'react-native';
import { IColor } from '../App.types';

interface IThemeProvider {
    children: ReactNode;
}

interface IThemeContext {
    colors: IColor;
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        return Appearance.getColorScheme() || 'light';
    });

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider
            value={{ colors: colors[theme], theme: theme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
