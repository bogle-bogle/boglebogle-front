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
  pet: [],
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
    addPet: (state, action) => {
      return {
        ...state,
        pet: [...state.pet, action.payload],
      };
    },
  },
});

export const memberAction = memberSlice.actions;
export default memberSlice.reducer;
