import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const styles = StyleSheet.create({
    title: {
        color: '#022150',
        fontSize:'24px',
        fontFamily: getFontFamily('Inter', '600'),
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        letterSpacing: '0.48px'
    }
})

export default styles;