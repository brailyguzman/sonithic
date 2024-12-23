import { MaterialIcons } from '@expo/vector-icons';

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];

export interface IFooterButton {
    label: string;
    icon: MaterialIconName;
}
