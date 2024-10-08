import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity>
                <Text style={{fontSize:30}}>Name</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})