const initialState = {
    searchData: "",
    userData: [],
  };
  
const userReducer = (state = initialState, action) => {
switch (action.type) {
    case "UPDATE_SEARCH_DATA":
    return {
        ...state,
        searchData: action.payload,
    };
    case "ADD_USER":
    return {
        ...state,
        userData: [...state.userData, action.payload],
    };
    case "EDIT_USER":
    return {
        ...state,
        userData: state.userData.map((user) =>
        user.id === action.payload.id ? action.payload : user
        ),
    };
    case "DELETE_USER":
    return {
        ...state,
        userData: state.userData.filter((user) => user.name !== action.payload),
    };
    default:
    return state;
}
};

export default userReducer;
  