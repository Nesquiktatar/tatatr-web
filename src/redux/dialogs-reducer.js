import userPhoto from "../assets/user.svg";

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogsNavbarData: [
        {id: 1, name: 'John', photo: userPhoto},
        {id: 2, name: 'Mikle', photo: userPhoto},
        {id: 3, name: 'Ketty', photo: userPhoto},
        {id: 4, name: 'Ragnar', photo: userPhoto},
        {id: 5, name: 'Fibby', photo: userPhoto}
    ],
    dialogsMessagesIncomingData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?!'},
        {id: 3, message: 'You should saw that movie dude!'}
    ],
    dialogsMessagesOutgoingData: [
        {id: 1, message: 'Wazzzup!'},
        {id: 2, message: 'Cool. What about you?'},
        {id: 3, message: 'Okay, I will do it!'}
    ],
    newMessageText: 'NEW MESSAGE'
}

const dialogsReducer =
    (state= initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.newMessageText = '';
            state.dialogsMessagesOutgoingData.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT :
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});

export default dialogsReducer;


