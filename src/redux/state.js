import userPhoto from "../assets/user.svg";
import {rerenderEntireTree} from "../render";

let state = {
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
        newPostText: 'POST MESSAGE',
        friendsData: [
            {id: 1, name: 'Anna', userPhoto: userPhoto},
            {id: 2, name: 'Mark', userPhoto: userPhoto},
            {id: 3, name: 'Tom', userPhoto: userPhoto},
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: '5',
        userPhoto: userPhoto
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.dialogsMessagesOutgoingData.push(newMessage);
    state.dialogsPage.newMessageText='';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export default state;