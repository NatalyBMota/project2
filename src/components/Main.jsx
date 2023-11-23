import React from 'react';
import Table from './Table.jsx';

const image = {
  src: "./images/main-car-img.jpg",
  alt: "Picture of a beautiful, classic red car.",
  title: "Classic red car",
  id: "mainPic"
};

function Main() {
  return <main>
    <img src={image.src} alt={image.alt} title={image.title} id={image.id} />
    <Table />
  </main>;
}

/*
let imgSource = "images/driver.jpg";

function Main() {
  return <main>
    <div id="picture">
      <img src={imgSource} alt="image of driving" />
    </div>
    <Table />
  </main>;
}
*/
export default Main;