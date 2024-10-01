import { createSlice } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoApi } from "../action/actionGame1";
const initialState = {
    listNew: []
}

const productSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addNew(state, action) {
            state.listNew.push(action.payload)
        },
        
    },
        extraReducers: builder => {
            // sau khi gọi api xong mới gọi vào đây
            builder.addCase(deleteTodoApi.fulfilled, (state, action) => {
                // Xóa todo cụ bộ trên store để không phải load lại danh sách
                state.listNew = state.listNew.filter(row => row.id !== action.payload);
    
            }).addCase(deleteTodoApi.rejected, (state, action) => {
                // Xử lý khi yêu cầu xóa todo bị từ chối hoặc xảy ra lỗi
                console.log('Delete todo rejected:', action.error.message);
            });
            builder.addCase(addTodoAPI.fulfilled, (state, action) => {
                state.listNew.push(action.payload);
            })
    
    
            
    
    
    
    
    
    
            // Xử lý các action rejected hoặc pending nếu cần
        },

})

export const { addNew } = productSlice.actions
export default productSlice.reducer