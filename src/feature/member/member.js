import { createSlice } from "@reduxjs/toolkit";

const initialMemberState = {
  id: 0,
  name: "",
  email: "",
  imgUrl: "",
  address: "",
  nickname: "",
  clubHeendyYn: "",
  socialId: 0,
  jwt: {
    accessToken: "",
    expiresIn: 0,
    grantType: "Bearer",
    refreshToken: "",
  },
};

const memberSlice = createSlice({
  name: "member",
  initialState: initialMemberState,
  reducers: {
    setMemeber: (state, action) => {
      const { member, pets } = action.payload;
      state.id = member.id;
      state.name = member.name;
      // ... 다른 멤버 속성들
      state.pet = pets;
    },
    clearMember: (state) => {
      return initialMemberState;
    },
  },
});

export const memberAction = memberSlice.actions;
export default memberSlice.reducer;
