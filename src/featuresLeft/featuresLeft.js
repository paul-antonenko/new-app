import React from "react";
import Features from "../components/features/features";

import featureImg from '../assets/images/featureImg.png'
import icon7 from "../assets/images/icons/icon7.svg";
import icon8 from "../assets/images/icons/icon8.svg";
import icon9 from "../assets/images/icons/icon9.svg";

const featuresData = {
  title: "High quality images",
  headerTitle: "For designers, by designers",
  headerSubtitle: "Unleash boundless creativity with a large repository of images optimized for designers",
  imageSrc: featureImg,
  items: [
    {
      icon: icon7,
      alt: "Icon Hight quality",
      title: "5K resolution support",
      subtitle: "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
    },
    {
      icon: icon8,
      alt: "Icon Water",
      title: "From water to glass",
      subtitle: "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
    },
    {
      icon: icon9,
      alt: "Icon Rainbow",
      title: "Portrait or landscape",
      subtitle: "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
    },
  ],
};

function FeaturesLeft() {
  return (
    <div>
      <Features {...featuresData} />
    </div>
  );
}

export default FeaturesLeft;