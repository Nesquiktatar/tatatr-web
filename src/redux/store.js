import userPhoto from "../assets/user.svg";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {

        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'First post', likesCount: '1', userPhoto: userPhoto},
                {id: 2, message: 'Second post', likesCount: '22', userPhoto: userPhoto},
                {id: 3, message: 'Third post', likesCount: '33', userPhoto: userPhoto},
                {id: 4, message: '4 post', likesCount: '44', userPhoto: userPhoto}
            ],
            friendsData: [
                {id: 1, name: 'Anna', userPhoto: userPhoto},
                {id: 2, name: 'Mark', userPhoto: userPhoto},
                {id: 3, name: 'Tom', userPhoto: userPhoto},
            ],
            newPostText: 'POST MESSAGE'
        }

    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}


window.store = store;

export default store;