import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

