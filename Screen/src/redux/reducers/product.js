import { createSlice } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoApi, updateTodoApi } from "../action/proAction";
const initialState = {
    listComment: []
}

const productSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment(state, action) {
            state.listComment.push(action.payload)
        },
        
    },
        extraReducers: builder => {
            // sau khi gọi api xong mới gọi vào đây
            builder.addCase(deleteTodoApi.fulfilled, (state, action) => {
                // Xóa todo cụ bộ trên store để không phải load lại danh sách
                state.listComment = state.listComment.filter(row => row.id !== action.payload);
    
            }).addCase(deleteTodoApi.rejected, (state, action) => {
                // Xử lý khi yêu cầu xóa todo bị từ chối hoặc xảy ra lỗi
                console.log('Delete todo rejected:', action.error.message);
            });
            builder.addCase(addTodoAPI.fulfilled, (state, action) => {
                state.listComment.push(action.payload);
            })
    
    
            builder.addCase(updateTodoApi.fulfilled, (state, action) => {
                // lấy tham số truyền vào
                // console.log(action);
                const { id, content, star, idGame} = action.payload;
                // tìm bản ghi phù hợp với tham số truyền vào
                const todo = state.listComment.find(row => row.id === id);
                // update
                if (todo) {
                    todo.content = content; // gán giá trị
                    todo.star = star;
                    todo.idGame = idGame;
                }
    
            })
    
    
    
    
    
    
            // Xử lý các action rejected hoặc pending nếu cần
        },

})

export const { addComment } = productSlice.actions
export default productSlice.reducer