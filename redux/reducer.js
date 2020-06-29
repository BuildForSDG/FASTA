const initialState = {
    // loggedIn: JSON.parse(localStorage.getItem("loggedIn")) ? JSON.parse(localStorage.getItem("loggedIn")) : false,
    // located: false,
    // location: JSON.parse(localStorage.getItem("location")) ? JSON.parse(localStorage.getItem("location")) : null,
    // reports: null,
    // trips: null,
    // defaultUser: { name: "Guest", email: "guest@fasta.com", phonenumber: "08099887766" },
    // user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : {},
    // token: JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : ""
    loggedIn: false,
    located: false,
    locations: null,
    reports: null,
    trips: null,
    defaultUser: { name: "Guest", email: "guest@fasta.com", phonenumber: "08099887766" },
    user: {},
    token: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            console.log("logging in: ", state, "action: ", action.data);
            const { user, token } = action.data;
            const loggedInState = {...state, loggedIn: true, user, token};
            console.log("logged in state: ", loggedInState);
            localStorage.setItem("fasta", JSON.stringify(loggedInState));
            console.log("localStorage: ", localStorage);
            return loggedInState;

        case "GET_REPORTS":
            console.log("getting reports", action.data);
            const getReportState = {...state, reports: action.data};
            console.log("get reports state: ", getReportState);
            localStorage.setItem("fasta", JSON.stringify(getReportState));
            console.log("localStorage: ", localStorage);
            return getReportState;

        case "GET_TRIPS":
            console.log("getting trips", action.data);
            const getTripState = {...state, reports: action.data};
            console.log("get trips state: ", getTripState);
            localStorage.setItem("fasta", JSON.stringify(getTripState));
            console.log("localStorage: ", localStorage);
            return getTripState;

        case "SET_LOCATION":
            console.log("setting location", action.data);
            const setLocationState = {...state, locations: action.data};
            console.log("set location state: ", setLocationState);
            localStorage.setItem("fasta", JSON.stringify(setLocationState));
            console.log("localStorage: ", localStorage);
            return setLocationState;

        case "SET_LOCATED":
            console.log("setting located", action.data);
            const setLocatedState = {...state, located: action.data};
            console.log("set located state: ", setLocatedState);
            localStorage.setItem("fasta", JSON.stringify(setLocatedState));
            console.log("localStorage: ", localStorage);
            return setLocatedState;

        case "SET_USER":
            console.log("setting user", action.data);
            const updatedUser = {...state.user, ...action.data}
            const setUserState = {...state, user: updatedUser};
            console.log("set user state: ", setUserState);
            localStorage.setItem("fasta", JSON.stringify(setUserState));
            console.log("localStorage: ", localStorage);
            return setUserState;

        default:
            return state; 
    }
};

export default reducer;