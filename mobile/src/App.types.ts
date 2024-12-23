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
