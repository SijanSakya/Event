import { useEffect, useState } from "react";
import MasterLayout from "../../components/Masterlayout/Master";
import Video from "../../components/HomePage/Video";
import FreqAsked from "../../components/HomePage/freqAsked";
import React from "react";
import Album from "../../components/HomePage/album";

function Home() {


  return (
    <>
    
      <MasterLayout>
        <Video videoUrl={""} />
        <Album title={""} subtitle={""} />
        <FreqAsked />
      </MasterLayout>
    </>
  );
}

export default Home;
