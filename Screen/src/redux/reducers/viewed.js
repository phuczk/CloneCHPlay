import { createSlice } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoApi, updateTodoApi } from "../action/viewdAction";

const initialState = {
    listView: []
}

const viewedsReducer = createSlice({
    name: 'vieweds',
    initialState,
    reducers: {
        addViewed(state, action) {
            state.listView.push(action.payload)
        },
    },
    extraReducers: builder => {
        // sau khi gọi api xong mới gọi vào đây
        builder
            .addCase(deleteTodoApi.fulfilled, (state, action) => {
                // Xóa todo cụ bộ trên store để không phải load lại danh sách
                state.listView = state.listView.filter(row => row.id !== action.payload);
            })
            .addCase(deleteTodoApi.rejected, (state, action) => {
                // Xử lý khi yêu cầu xóa todo bị từ chối hoặc xảy ra lỗi
                console.log('Delete todo rejected:', action.error.message);
            })
            .addCase(addTodoAPI.fulfilled, (state, action) => {
                state.listView.push(action.payload);
            })
            .addCase(updateTodoApi.fulfilled, (state, action) => {
                const { id, content, star, idGame } = action.payload;
                const todo = state.listView.find(row => row.id === id);
                if (todo) {
                    todo.content = content;
                    todo.star = star;
                    todo.idGame = idGame;
                }
            });
        // Xử lý các action rejected hoặc pending nếu cần
    },
});

export const { addViewed } = viewedsReducer.actions;
export default viewedsReducer.reducer;
