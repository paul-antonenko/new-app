import React from "react";
import Features from "../components/features/features";

import featureImg from '../assets/images/featureImg.png'

const featuresData = {
  title: "High quality images",
  headerTitle: "For designers, by designers",
  headerSubtitle: "Unleash boundless creativity with a large repository of images optimized for designers",
  imageSrc: featureImg,
  items: [
    {
      icon: "/images/icons/icon7.svg",
      alt: "Icon Hight quality",
      title: "5K resolution support",
      subtitle: "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
    },
    {
      icon: "/images/icons/icon8.svg",
      alt: "Icon Water",
      title: "From water to glass",
      subtitle: "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
    },
    {
      icon: "/images/icons/icon9.svg",
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