import {Text} from 'react-native';
import propTypes from 'prop-types';

const Title = props =>{
    return <Text>{props.title}</Text>
}

Title.propTypes = {
    title: propTypes.string.isRequired,
}

export default Title;