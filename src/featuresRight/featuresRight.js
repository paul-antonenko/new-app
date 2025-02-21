import React from "react";
import Features from "../components/features/features";

import infoImg from '../assets/images/infoImg.png'

const featuresData = {
  title: "Best-in-class support",
  headerTitle: "Convenience and licensing that empowers",
  headerSubtitle: "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.",
  imageSrc: infoImg,
  items: [
    {
      icon: "/images/icons/icon10.svg",
      alt: "Icon Rocket",
      title: "Faster downloads",
      subtitle: "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.",
    },
    {
      icon: "/images/icons/icon11.svg",
      alt: "Icon Water",
      title: "Icon Team",
      subtitle: "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
    },
    {
      icon: "/images/icons/icon12.svg",
      alt: "Icon Watermark",
      title: "Royalty-free licensing",
      subtitle: "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
    },
  ],
};

function FeaturesRight() {
  return (
    <div>
      <Features {...featuresData} reverse={true} />
    </div>
  );
}

export default FeaturesRight;