import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const dogSlice = createSlice({
    name: 'dog',
    initialState: {
        imgUrl: '',
        breeds: []
    },
    selectors: {
        getImgUrl: state => state.imgUrl,
        getBreeds: state => state.breeds
    },
    extraReducers(builder) {
        // pending, fulfilled, rejected
        builder.addCase(
            getNewDogImage.fulfilled,
            (state, action) => {
                console.log(action.payload);
                state.imgUrl = action.payload;
            }
        );
        builder.addCase(
            loadDogBreeds.fulfilled,
            (state, action) => {
                console.log(action);
                /*
                {
                    "affenpinscher": [],
                    "african": [],
                    "airedale": [],
                    "akita": [],
                    "appenzeller": [],
                    ...
                */
                state.breeds = Object.keys(action.payload);
            }
        )
    }

});

// https://dog.ceo/api/breeds/image/random
//
// 
export const getNewDogImage = createAsyncThunk(
    'dog/getNewDogImage',
    async (breed) => {
        let response;
        if (breed) {
            response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        } else {
            response = await fetch('https://dog.ceo/api/breeds/image/random');
        }
        const data = await response.json();
        return data.message;
    }
);

// https://dog.ceo/api/breeds/list/all
export const loadDogBreeds = createAsyncThunk(
    'dog/loadDogBreeds',
    async() => {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        return data.message;
    }
);

export const { getImgUrl, getSelectedBreed, getBreeds } = dogSlice.selectors;
export default dogSlice.reducer;