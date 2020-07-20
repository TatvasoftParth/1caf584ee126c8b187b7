import { StyleSheet } from 'react-native';
import * as globals from '../../Utils/Size';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btnView: {
        marginVertical: 10,
    },
    btnStyles: {
        backgroundColor: "#125199",
        borderRadius: 5,
    },
    textStyles: {
        fontSize: 18,
    },
    btnTextStyles: {
        color: "#FFF",
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyles: {
        height: 50,
        width: 50,
    }
})