import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import testApi from 'app/axios/api/testApi';
import { toastUtils } from 'app/helpers/toast';

export type TestState = {
  loading: boolean;
  dataPro: any;
};

export const initialState: TestState = {
  loading: false,
  dataPro: [],
};

export const getProductTest = createAsyncThunk(
  'test/getPro',
  async (params?: any, thunkAPI?: any) => {
    // viết type ở đây cho chặt chẽ
    thunkAPI.dispatch(setLoading(true));
    const results = await testApi.getProduct();
    if (results.status === 200) {
      toastUtils.success('Thành công !');
      thunkAPI.dispatch(setPro(results));
      thunkAPI.dispatch(setLoading(false));
    } else {
      thunkAPI.dispatch(setPro([]));
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

const slice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPro: (state, action: PayloadAction<any>) => {
      state.dataPro = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

const { actions, reducer: testReducer } = slice;
export const { setLoading, setPro } = actions;
export default testReducer;
