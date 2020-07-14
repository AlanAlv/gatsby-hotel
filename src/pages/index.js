import React from "react";
import { css } from '@emotion/core';
import Layout from '../components/layout';
import HotelImage from '../components/HotelImage';
import HomeContent from '../components/HomeContent';
import RoomPreview from '../components/RoomPreview';
import useRooms from '../hooks/useRooms';


const IndexPage = () => { 

  const rooms = useRooms();

  console.log(rooms);
  return (
    <Layout>
      <HotelImage />
      <HomeContent />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Our rooms
      </h2>

        {rooms.map(room => (
          <RoomPreview />
        ))}
      
    </Layout>
  )
}
export default IndexPage
