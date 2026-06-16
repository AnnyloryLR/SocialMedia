import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";


const UserPost = (props) => {
    return(
        <View>
            <View>
                <UserProfileImage profileImage={props.profileImage} imageDimensions={48} />
            </View>

        </View>

    )
  
}

export default UserPost;

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
}