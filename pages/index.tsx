import Head from 'next/head'
import { GetStaticProps } from 'next'
import utilStyles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { deliveryClient } from "../lib/config";
import { Homepage } from '../models/homepage';
import RichText from 'components/richtext';

interface IPageProps {
  homepage: Homepage[];
}

export default function Home({ homepage }: { homepage }) {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Basic Web Spotlight project</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} data-kontent-item-id={homepage.id} >
        <img data-kontent-element-codename="picture" src={homepage.image}></img>
        <h1 data-kontent-element-codename="headline">{homepage.headline}</h1>
        <RichText element={homepage.body}/>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const getHomepage = await deliveryClient.item<Homepage>("homepage")
    .toPromise();
  const props = {
    homepage: {
      id: getHomepage.data.item.system.id,
      headline: getHomepage.data.item.elements.headline.value,
      body: getHomepage.data.item.elements.bodyText,
      image: getHomepage.data.item.elements.picture.value[0].url,
    },
  };

  return { props };
}