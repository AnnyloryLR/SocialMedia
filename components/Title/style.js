import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    title: {
        color: '#022150',
        fontSize: 24,
        fontFamily: getFontFamily('Inter', '600'),
        fontStyle: 'bold',
        fontWeight: '700',
        lineHeight: 'normal',
        letterSpacing: 0.48
    }
})

export default style;