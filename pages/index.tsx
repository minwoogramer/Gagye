import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Header } from "./../Layouts/Header";
import { Footer } from "./../Layouts/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
