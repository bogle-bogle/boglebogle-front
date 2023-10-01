import { createSlice } from '@reduxjs/toolkit';

const initialMemberState = {
  id: 0,
  name: '',
  email: '',
  imgUrl: '',
  address: '',
  nickname: '',
  clubHeendyYn: '',
  socialId: 0,
  jwt: {
    accessToken: '',
    expiresIn: 0,
    grantType: 'Bearer',
    refreshToken: '',
  },
};

const memberSlice = createSlice({
  name: 'member',
  initialState: initialMemberState,
  reducers: {
    setMemeber: (state, action) => {
      state = { ...action.payload.member, pet: [...action.payload.pets] };

      return state;
    },
    clearMember: state => {
      state = { ...initialMemberState, pet: [] };
      return state;
    },
  },
});

export const memberAction = memberSlice.actions;
export default memberSlice.reducer;
