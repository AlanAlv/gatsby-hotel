import React from "react"
import Layout from '../components/layout';
import HotelImage from '../components/HotelImage';
import HomeContent from '../components/HomeContent';
import useRooms from '../hooks/useRooms'


const IndexPage = () => { 

  useRooms();
  return (
    <Layout>
      <HotelImage />
      <HomeContent />
      
    </Layout>
  )
}
export default IndexPage
