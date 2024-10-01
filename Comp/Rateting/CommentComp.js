import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../Screen/src/redux/store';
import { API_URL } from '../../confis';
import Rating from './Rating'; // Đường dẫn tới Rating component
const Comment = ({ idApp }) => {
    const [ratingData, setRatingData] = useState([]);
    const [data, setData] = useState([]);

    // Lấy dữ liệu đánh giá từ API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/comments?idGame=${idApp}`);
                const data = await response.json();
                const stars = data.map(comment => comment.star); // Lấy ra mảng các số sao từ dữ liệu đánh giá
                setRatingData(stars); // Đặt mảng số sao vào state
                setData(data); // Đặt dữ liệu comment vào state
            } catch (error) {
                console.error('Error fetching rating data:', error);
            }
        };

        fetchData();
    }, [idApp]);

    // Tính số lượng các phần tử hợp lệ
    const validCount = ratingData.filter(star => star >= 1 && star <= 5).length;

    return (
        <>
            <Provider store={store}>
                <Rating numberData={ratingData} countComment={validCount} id={idApp} setRatingData={setRatingData} data={data}/>
            </Provider>
        </>
    );
};

export default Comment;
