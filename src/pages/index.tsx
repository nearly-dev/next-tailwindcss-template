import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "@/layouts/default";
import style from "@/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Home</h1>
      </div>
    </DefaultLayout>
  );
};

export default Home;
