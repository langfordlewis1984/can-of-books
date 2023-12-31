import React from "react";
import { Helmet } from "react-helmet-async";
import BestBooks from "../../components/BestBooks/BestBooks";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Can of Books Home</title>
        <meta
          name="description"
          content="This is the home page for Can of Books"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <h2>Home Page</h2>
        <BestBooks />
      </main>
    </>
  );
}
