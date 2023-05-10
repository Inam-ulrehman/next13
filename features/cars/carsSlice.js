import { customFetch } from '@/lib/axios/customFetch'
import { makes } from '@/lib/data/carMakes'
import { createStandaloneToast } from '@chakra-ui/react'

const { toast } = createStandaloneToast()
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  // register
  make: '',
  model: '',
  selectModel: [],
  type: 'sedan',
  color: 'white',
  year: '2010-05',
  price: '',
  km: '',
  description: '',
  uploadImages: [],

  // Search
  searchName: '',
  searchEmail: '',
  searchMobile: '',
  // Pagination
  list: [],
  page: 1,
  limit: 10,
  nbHits: '',
  sort: '-createdAt',
  searchConfirmed: false,
  //Id's
  deleteId: '',
  updateId: '',
  _id: '',
  refreshData: false,
  // Delete Many
  deleteMany: [],
  isLoading: false,
}
export const carsThunk = createAsyncThunk(
  'cars/carsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/products/static')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
//======== Create Car========
export const createCarsThunk = createAsyncThunk(
  'cars/createCarsThunk',
  async (state, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/cars/create', state)
      thunkAPI.dispatch(clearState())
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
//======== Get All Cars========
export const allCarsThunk = createAsyncThunk(
  'cars/allCarsThunk',

  async (state, thunkAPI) => {
    const cookies = Cookies.get('token')
    try {
      const response = await customFetch.get(
        `/authadmin/cars?name=${state?.searchName}&email=${state?.searchEmail}&mobile=${state?.searchMobile}&sort=${state?.sort}&limit=${state?.limit}&page=${state?.page}`,
        {
          headers: {
            Authorization: `Bearer ${cookies}`,
          },
        }
      )

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// ==============Single Car ======================
export const singleCarThunk = createAsyncThunk(
  'cars/singleCarThunk',
  async (_id, thunkAPI) => {
    const cookies = Cookies.get('token')
    try {
      const response = await customFetch.get(`/authadmin/cars/${_id}`, {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      })

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// ==============Delete Car ======================
export const deleteCarThunk = createAsyncThunk(
  'cars/deleteCarThunk',
  async (_id, thunkAPI) => {
    const cookies = Cookies.get('token')
    try {
      const response = await customFetch.delete(`/authadmin/cars/${_id}`, {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      })

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// ==== Delete Many ====

export const deleteManyCarsThunk = createAsyncThunk(
  'appointment/deleteManyCarsThunk',
  async (data, thunkAPI) => {
    try {
      const response = await customFetch.patch(`/authadmin/cars`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      return response.data
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
    getStateValues: (state, { payload }) => {
      const { name, value } = payload

      if (name === 'make') {
        const result = makes.find((item) => item.company === value)
        state.selectModel = result?.models
      }
      state[name] = value
    },
    clearState: (state, { payload }) => {
      state.make = ''
      state.model = ''
      state.selectModel = []
      state.type = 'sedan'
      state.color = 'white'
      state.year = '2010-05'
      state.price = ''
      state.km = ''
      state.description = ''
      state.uploadImages = []
      // search
      state.search = ''
      // pagination
      state.page = 1
      state.limit = 10
      state.sort = '-createdAt'
    },
    //======pagination=======
    next: (state, { payload }) => {
      state.page = state.page + 1
    },
    prev: (state, { payload }) => {
      state.page = state.page - 1
    },
    index: (state, { payload }) => {
      const index = Number(payload)
      state.page = index
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(carsThunk.pending, (state, { payload }) => {
        console.log('promise pending')
        state.isLoading = true
      })
      .addCase(carsThunk.fulfilled, (state, { payload }) => {
        console.log('promise fulfilled')
        console.log(payload)
        state.isLoading = false
      })
      .addCase(carsThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
      // ==========createCarsThunk===============
      .addCase(createCarsThunk.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(createCarsThunk.fulfilled, (state, { payload }) => {
        state.refreshData = !state.refreshData
        state.isLoading = false
        toast({
          description: payload.msg,
          status: 'success',
          position: 'top-right',
        })
      })
      .addCase(createCarsThunk.rejected, (state, { payload }) => {
        toast({
          title: 'An error occurred.',
          description: payload.msg,
          status: 'success',
        })
        state.isLoading = false
      })
      // ==========allCarsThunk===============
      .addCase(allCarsThunk.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(allCarsThunk.fulfilled, (state, { payload }) => {
        state.list = payload.list
        state.nbHits = payload.nbHits
        if (payload.nbHits < 10) {
          state.page = 1
        }
        state.isLoading = false
      })
      .addCase(allCarsThunk.rejected, (state, { payload }) => {
        console.log(payload)
        state.isLoading = false
      })
      // ===========singleCarThunk===========
      .addCase(singleCarThunk.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(singleCarThunk.fulfilled, (state, { payload }) => {
        addObjectInState(payload.result, state)
        state.isLoading = false
      })
      .addCase(singleCarThunk.rejected, (state, { payload }) => {
        toast.error(payload.msg)
        state.isLoading = false
      })
      // ===========deleteCarThunk===========
      .addCase(deleteCarThunk.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(deleteCarThunk.fulfilled, (state, { payload }) => {
        toast.success(payload.msg)
        state.refreshData = !state.refreshData
        state.isLoading = false
      })
      .addCase(deleteCarThunk.rejected, (state, { payload }) => {
        toast.error(payload.msg)
        state.isLoading = false
      })
      // ===========deleteManyCarsThunk===========
      .addCase(deleteManyCarsThunk.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(deleteManyCarsThunk.fulfilled, (state, { payload }) => {
        toast.success(payload.msg)
        state.refreshData = !state.refreshData
        state.isLoading = false
      })
      .addCase(deleteManyCarsThunk.rejected, (state, { payload }) => {
        toast.error(payload.msg)
        state.isLoading = false
      })
  },
})
export const { createFunction, getStateValues, clearState, next, prev, index } =
  carsSlice.actions
export default carsSlice.reducer
