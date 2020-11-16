import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import PeopleStub from "../../stubs/people.json";

export interface Person {
  avatar: string;
  description: string;
  email: string;
  id: number;
  name: string;
}

interface PeopleState {
  entities: Person[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export const queryPersonByName = createAsyncThunk(
  "people/queryByName",
  async (query: string) => {
    const people = query
      ? PeopleStub.filter(({ name }) =>
          name.toLowerCase().startsWith(query.toLowerCase())
        ).slice(0, 12)
      : PeopleStub.slice(0, 12);
    return new Promise((res) => {
      setTimeout(() => res(people), 300);
    }).then((res) => res);
  }
);

export default createSlice({
  name: "people",
  initialState: {
    loading: "idle",
    entities: PeopleStub.slice(0, 12),
  } as PeopleState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(queryPersonByName.fulfilled, (state, action) => {
      state.loading = "succeeded";
      // TODO: James - fix this type
      state.entities = action.payload;
    });

    builder.addCase(queryPersonByName.pending, (state, action) => {
      state.loading = "pending";
    });
  },
});
