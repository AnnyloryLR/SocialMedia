import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    user:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    userContainer:{
        flexDirection:'row',
    },
    userTextContainer:{
        justifyContent:'center', 
        marginLeft:10
    },
    userName:{
        color:'#000',
        fontFamily: getFontFamily('Inter', 600),
        fontSize:16,

    },
    location:{
        color:'#79869F',
        fontFamily: getFontFamily('Inter', 400),
        fontSize:12,
        marginTop:5,
        
    },
    postImage:{
        alignItems:'center',
        marginVertical:20,
    },
    userPostContainer:{
        marginTop:35,
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#EFF2F6'
    },
    userPostStats:{
        flexDirection:'row',
        marginLeft:19
    },
    userStatButton:{
        marginLeft:3, 
        color:'#79869F'
    },
    userStatButtonRight:{
        flexDirection:'row',
        marginLeft:27
    },
    userPostStatText:{
        marginLeft:3, 
        color:'#79869F'
    },
})

export default style;