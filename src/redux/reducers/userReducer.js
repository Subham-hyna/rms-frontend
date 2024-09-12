import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { user:{} },
    reducers: {
        loginRequest(state,action){
            state.userLoading = true;
            state.isAuthenticated = false;
        },
        loginSuccess(state,action){
            state.userLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.data.user;
            state.userMessage = action.payload.userMessage;
        },
        loginFail(state,action){
            state.userLoading = false;
            state.isAuthenticated = false;
            state.userError = action.payload;
        },

        signupRequest(state,action){
            state.userLoading = true;
        },
        signupSuccess(state,action){
            state.userLoading = false;
            state.userMessage = action.payload.message;
        },
        signupFail(state,action){
            state.userLoading = false;
            state.userError = action.payload;
        },

        loadUserRequest(state,action){
            state.userLoading = true;
            state.isAuthenticated = false;
        },
        loadUserSuccess(state,action){
            state.userLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loadUserFail(state,action){
            state.userLoading = false;
            state.isAuthenticated = false;
            state.user = {}
            state.userError = action.payload;
        },

        logoutRequest(state,action){
            state.userLoading = true;
        },
        logoutSuccess(state,action){
            state.userLoading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.userMessage = action.payload;
        },
        logoutFail(state,action){
            state.userLoading = false;
            state.userError = action.payload;
        },

        // OTPVerificationRequest(state,action){
        //     state.userLoading = true;
        // },
        // OTPVerificationSuccess(state,action){
        //     state.userLoading = false;
        //     state.userMessage = action.payload.userMessage
        // },
        // OTPVerificationFail(state,action){
        //     state.userLoading = false;
        //     state.userError = action.payload;
        // },

        updateAvatarRequest(state,action){
            state.userLoading = true;
        },
        updateAvatarSuccess(state,action){
            state.userLoading = false;
            state.user = action.payload.data.user
            state.userMessage = action.payload.message
        },
        updateAvatarFail(state,action){
            state.userLoading = false;
            state.userError = action.payload;
        },
        // updateAvatarReset(state,action){
        //     state.isUpdated = false;
        // },

        updatePasswordRequest(state,action){
            state.userLoading = true;
        },
        updatePasswordSuccess(state,action){
            state.userLoading = false;
            state.userMessage = action.payload.message;
        },
        updatePasswordFail(state,action){
            state.userLoading = false;
            state.userError = action.payload;
        },
        // updatePasswordReset(state,action){
        //     state.isChanged = false;
        // },

        // forgotPasswordRequest(state,action){
        //     state.userLoading = true;
        // },
        // forgotPasswordSuccess(state,action){
        //     state.userLoading = false;
        //     state.userMessage = action.payload.userMessage;
        // },
        // forgotPasswordFail(state,action){
        //     state.userLoading = false;
        //     state.userError = action.payload;
        // },

        // resetPasswordRequest(state,action){
        //     state.userLoading = true;
        //     state.isAuthenticated = false
        // },
        // resetPasswordSuccess(state,action){
        //     state.user = action.payload.data.user
        //     state.userMessage = action.payload.userMessage;
        //     state.isAuthenticated = true
        //     state.userLoading = false;
        //     state.isChanged = true;
        // },
        // resetPasswordFail(state,action){
        //     state.userLoading = false;
        //     state.userError = action.payload;
        //     state.isAuthenticated = false
        // },
        // resetPasswordReset(state,action){
        //     state.isChanged = false;
        // },

        // changeMembershipRequest(state,action){
        //     state.userLoading = true;
        // },
        // changeMembershipSuccess(state,action){
        //     state.userMessage = action.payload.userMessage;
        //     state.userLoading = false;
        //     state.isChanged = true;
        // },
        // changeMembershipFail(state,action){
        //     state.userLoading = false;
        //     state.userError = action.payload;
        // },
        // changeMembershipReset(state,action){
        //     state.isChanged = false;
        // },

        // allMemberRequest(state,action){
        //     state.userLoading = true;
        //     state.users = [];
        // },
        // allMemberSuccess(state,action){
        //     state.userLoading = false;
        //     state.users = action.payload.data.users;
        //     state.resultPerPage = action.payload.data.resultPerPage;
        //     state.userFilteredCount =  action.payload.data.userFilteredCount;
        // },
        // allMemberFail(state,action){
        //     state.userLoading = false;
        //     state.userError = action.payload;
        // },

        clearError(state,action){
            state.userError = null;
        },
        clearMessage(state,action){
            state.userMessage = null;
        }
    }
})

export default userSlice.reducer;

export const { 
    loginRequest,
    loginSuccess, 
    loginFail,
    signupRequest,
    signupSuccess,
    signupFail, 
    loadUserRequest, 
    loadUserSuccess, 
    loadUserFail, 
    logoutRequest, 
    logoutSuccess, 
    logoutFail, 
    // OTPVerificationRequest, 
    // OTPVerificationSuccess, 
    // OTPVerificationFail, 
    updateAvatarRequest,
    updateAvatarSuccess,
    updateAvatarFail,
    // updateAvatarReset, 
    updatePasswordRequest, 
    updatePasswordSuccess, 
    updatePasswordFail, 
    // updatePasswordReset,
    // forgotPasswordRequest,
    // forgotPasswordSuccess,
    // forgotPasswordFail,
    // resetPasswordRequest,
    // resetPasswordSuccess,
    // resetPasswordFail, 
    // resetPasswordReset,
    // allMemberRequest,
    // allMemberSuccess,
    // allMemberFail,
    // changeMembershipRequest,
    // changeMembershipSuccess,
    // changeMembershipFail,
    // changeMembershipReset,
    clearError, 
    clearMessage 
} = userSlice.actions;
