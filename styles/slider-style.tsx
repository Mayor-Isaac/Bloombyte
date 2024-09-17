"use client";
import styled from "styled-components";

type Props = {
  img: string;
};

export const BackgroudStyled = styled.div<Props>`
  width: 100%;
  background-image: url(${({ img }) => img});
  height: 700px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: white;
  font-size: 24px;
  background-color: #222;

  @media (max-width: 768px) {
    height: 400px;
    font-size: 17px;
  }
`;
