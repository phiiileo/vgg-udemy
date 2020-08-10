import { getIcons } from './all-icons'


// custom Icon component
export default function CustomIcon(props) {
    const customIcon = getIcons(props.name);
    return customIcon
}