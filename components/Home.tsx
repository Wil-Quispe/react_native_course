import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const QUERY = gql`
  query {
    countries {
      name
      code
      capital
      currency
    }
  }
`

const Country = ({ item }: { item: any }) => {
  return (
    <View
      style={tw`bg-blue-800 mb-5 flex flex-col justify-center items-center`}
    >
      <Text style={tw`text-white`}>name: {item.name}</Text>
      <Text style={tw`text-white`}>code :{item.code}</Text>
      <Text style={tw`text-white`}>capital: {item.capital}</Text>
      <Text style={tw`text-white`}>currency: {item.currency}</Text>
    </View>
  )
}

const Home = () => {
  const { data } = useQuery(QUERY)
  return (
    <View>
      <FlatList data={data.countries} renderItem={Country} />
    </View>
  )
}

export default Home
