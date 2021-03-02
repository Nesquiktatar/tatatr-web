import userPhoto from "../assets/user.svg";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
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
};


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '5',
                userPhoto: userPhoto
            }
            state.newPostText = '';
            state.postsData.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;