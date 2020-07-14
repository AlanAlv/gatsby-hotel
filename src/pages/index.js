import React from "react";
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import HotelImage from '../components/HotelImage';
import HomeContent from '../components/HomeContent';
import RoomPreview from '../components/RoomPreview';
import useRooms from '../hooks/useRooms';


const IndexPage = () => { 

  const RoomsList = styled.ul`
    max-width: 1200px;
    widows: 95%;
    margin: 4rem auto 0 auto;

    @media(min-width: 768px){
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      column-gap: 3rem;
    }
  `;

  const rooms = useRooms();

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

      <RoomsList>
        {rooms.map(room => (
          <RoomPreview 
            key={room.id}
            room={room}
          />
        ))}
      </RoomsList>
    </Layout>
  )
}
export default IndexPage
