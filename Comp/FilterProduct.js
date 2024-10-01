import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const FilterView = ({ productName, selected, onPress }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity
      style={{ color: selected ? '#38b101' : '#a7a7a7', fontSize: selected ? 15 : 15,borderBottomWidth: selected ? 0.5 : 0.5, borderBottomColor: selected ? '#f5f5f5' : "#f5f5f5", borderBottomColor: selected ? '#38b101' : "#f5f5f5"}}
      onPress={onPress}>
      <Text style={{ color: selected ? '#38b101' : '#a7a7a7', fontSize: selected ? 15 : 15,borderBottomWidth: selected ? 2 : 0, borderBottomColor: selected ? '#38b101' : "#f5f5f5",width: 100, textAlign: 'center', paddingBottom: 20, fontWeight: selected ? "bold" : 'normal'}}>{productName}</Text>
    </TouchableOpacity>
  </View>
);

const FilterProduct = ({ selectedFilter, onFilterChange }) => {
  const filters = ['For you', 'Top', 'Book', 'Hot','Viewed', 'Child', 'Free', 'Cost', 'Family', 'Education'];

  const handlePress = (filterName) => {
    onFilterChange(filterName);
  };

  return (
    <SafeAreaView style={{ padding: 5, paddingLeft: 15, paddingRight: 15 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {filters.map((filter, index) => (
          <FilterView
            key={index}
            productName={filter}
            selected={selectedFilter === filter}
            onPress={() => handlePress(filter)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterProduct;
