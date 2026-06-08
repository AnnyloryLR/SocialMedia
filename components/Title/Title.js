import {Text} from 'react-native';
import propTypes from 'prop-types';
import styles from './style';

const Title = props =>{
    return <Text style={styles.title}>{props.title}</Text>
}

Title.propTypes = {
    title: propTypes.string.isRequired,
}

export default Title;