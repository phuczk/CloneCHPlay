import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import ProductScreen from './src/screen/viewed'

const ViewedProduct = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <ProductScreen/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ViewedProduct

const styles = StyleSheet.create({})