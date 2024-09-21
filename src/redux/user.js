import { createSlice } from "@reduxjs/toolkit"; // 기존의 createReducer 와 createAction 을 같이해줌

export const userSlice = createSlice({
    name: "user",       // 리듀서 이름
    initialState: {     // 데이터 초기값
        value : {
            name: "",
            age: 0,
            email: "",
        }
    },
    reducers: {         // 상태가 변하면 어떻게 실행할지 ( 함수 )
        login: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;