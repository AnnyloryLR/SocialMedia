import {Text} from 'react-native';
import propTypes from 'prop-types';
import style from './style';

const Title = props =>{
    return <Text style={style.title}>{props.title}</Text>
}

Title.propTypes = {
    title: propTypes.string.isRequired,
}

export default Title;