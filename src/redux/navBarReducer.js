let initialState = {
        friendInfo: [
            { id: 1, profileImage: "https://forum.albiononline.com/wcf/images/avatars/38/39542-380e2d281928c65f65b391c00f04a809eea099f1-128.jpg", name: "Юра" },
            { id: 2, profileImage: "https://pa1.narvii.com/7487/459934d76d4f3d6528fde952719159619c7d2130r1-256-256_00.gif", name: "Jojo" },
            { id: 3, profileImage: "https://icon-library.com/images/small-cat-icon/small-cat-icon-1.jpg", name: "Котик" }
        ]
};
const navBarReducer = (state = initialState, action) =>{
    return state;
}

export default navBarReducer;