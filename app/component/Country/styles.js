import { StyleSheet } from 'react-native';
import * as globals from '../../Utils/Size';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textInputStyles: {
        borderColor: "gray",
        borderWidth: 1,
        height: globals.screenWidth * 0.1,
        width: globals.screenWidth * 0.5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInputView: {
        marginVertical: 10,
    },
    btnStyles: {
        backgroundColor: "#125199",
        borderRadius: 5,
    },
    btnTextStyles: {
        color: "#FFF",
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
})