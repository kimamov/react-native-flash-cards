import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    card: {
        backgroundColor: "lightgrey",
        height: 200,
        margin: 10,
        padding: 10,
        justifyContent: "space-around",
        borderRadius: 10
    },
    quizWrapper: {
        height: 300,
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
    },
    quizFront: {
        borderRadius: 20,
        justifyContent: "center",
        flex: 1,
        backgroundColor: "lightgrey"
    },
    quizBack: {
        borderRadius: 20,
        justifyContent: "center",
        flex: 1,
        backgroundColor: "red"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,


    },
    flexButton: {
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        flex: 1

    },
    headingText: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"

    },
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "lightgrey",
        padding: 8
    },
    innerContainer: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1
    }
})