import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _callSubscriber() {
        console.log('no subscribers(obserbers)');
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Somebody once told me", likesCount: 0 },
                { id: 2, message: "The world is gonna roll me", likesCount: 17 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },

        navBar: {
            friendInfo: [
                { id: 1, profileImage: "https://forum.albiononline.com/wcf/images/avatars/38/39542-380e2d281928c65f65b391c00f04a809eea099f1-128.jpg", name: "Юра" },
                { id: 2, profileImage: "https://pa1.narvii.com/7487/459934d76d4f3d6528fde952719159619c7d2130r1-256-256_00.gif", name: "Jojo" },
                { id: 3, profileImage: "https://icon-library.com/images/small-cat-icon/small-cat-icon-1.jpg", name: "Котик" }
            ]
        }
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
        this._state.navBar = navBarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    }
}


export default store;

