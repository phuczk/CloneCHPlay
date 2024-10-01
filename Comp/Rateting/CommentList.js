import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../Theme/ThemeContext';
const CommentList = ({ comments }) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <View style={{}}>
            

            {comments.map((comment, index) => (
                <View key={index} style={{ width: 350, padding: 10,paddingTop: 10, backgroundColor: theme.inputColor, margin: 10, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopRightRadius: 24, elevation: 5 }}>
                

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" }} style={{ width: 40, height: 40, marginRight: 10}} />
                        <Text style={{color: theme.textColor}}> {comment.star} </Text>
                        <Text style={{color: theme.textColor}}>★</Text>
                    </View>
                    <View style={{backgroundColor: theme.backgroundColor, padding: 20, marginTop: 10, borderRadius: 15}}>
                        <Text style={{color: theme.textColor}}>{comment.content}</Text>
                    </View>

                </View>
            ))}
        </View>
    );
};

export default CommentList;
