import type { NextPage } from "next";

import styled from "styled-components";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import { BodyLanding } from "../Layouts/BodyLanding";

const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const Home: NextPage = () => {
  return (
    <IndexContainer>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <BodyLanding />
      <Footer />
    </IndexContainer>
  );
};

export default Home;
