import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cart: [],
  error: null,
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (product, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 5,
          date: new Date().toISOString().split("T")[0],
          products: [{ productId: product.id, quantity: 1 }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const data = await response.json();
      console.log(data);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Product added to cart",
        showConfirmButton: false,
        timer: 1500,
      });

      return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
    
    builder.addCase(addToCartAsync.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
