import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";


const UserPost = (props) => {
    return(
        <View>
            <View 
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}
            >
                <View style={{flexDirection:'row'}}>
                     <UserProfileImage
                        profileImage={props.profileImage}
                        imageDimensions={48}
                    />
                    <View style={{justifyContent:'center', marginLeft:10}}>
                        <Text>
                            {props.firstName} {props.lastName}
                        </Text>
                            {props.location && <Text>{props.location}</Text>}

                     </View>
               
                </View>
                <FontAwesomeIcon icon={faEllipsisH} />
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