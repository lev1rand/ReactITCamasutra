const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =
{
    dialogs: [
        { id: 1, name: "Ira" },
        { id: 2, name: "Igor" },
        { id: 3, name: "Vitalya" },
        { id: 4, name: "Slavik" }
    ],
    messages: [
        { id: 1, message: "Hi", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/66/SmallStellatedDodecahedron.gif" },
        { id: 2, message: "How r u?", avatar: "https://img.is-animal.ru/thumb/5c/38097-0.jpg" },
        { id: 3, message: "Bye-bye :)", avatar: "https://forum.albiononline.com/wcf/images/avatars/38/39542-380e2d281928c65f65b391c00f04a809eea099f1-128.jpg" }
    ],
    newMessageBody: ''
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };

        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });