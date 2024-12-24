import { MaterialIcons } from '@expo/vector-icons';

export interface IColor {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
}

export interface IColorContainer {
    dark: IColor;
    light: IColor;
}

export type MaterialIconName = React.ComponentProps<
    typeof MaterialIcons
>['name'];
