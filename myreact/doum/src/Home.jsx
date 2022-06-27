import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Slider from './components/Slider';
import Bestcafe from './components/Bestcafe';
import Middle from './components/Middle';
import Undersection from './components/Undersection';
import Footer from './components/Footer';

const Home = () => {
    const [data, setData] = useState([]);
    const [cdata, setCData] = useState([]);
    const [mdata, setMData] = useState([]);
    const [fcdata, setFcdata] = useState([]);
    useEffect(() => {
      axios("data/banner.json")
        .then(dt => {
          setData(dt.data);
          // console.log(dt.data);
        });
      axios('data/bestcafe.json')
        .then(dt => {
          setCData(dt.data.list);
          setMData(dt.data.pop);
          setFcdata(dt.data.fancafe);
        });
    },[]);
  return (
    <>
      <Header />
      { data.length !== 0 ? <Slider data={data} /> : "" }
      { cdata.length !== 0 ? <Bestcafe data={cdata} /> : "" }
      { mdata.length !== 0 ? <Middle data={mdata} /> : "" }
      { mdata.length !== 0 ? <Undersection data={fcdata} /> : "" }
      <Footer />
    </>
  )
}

export default Home