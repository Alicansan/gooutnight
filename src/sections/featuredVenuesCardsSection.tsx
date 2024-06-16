import { HoverEffect } from "@/components/ui/card-hover-effect";

export function FeaturedVenuesCards() {
  return (
    <div className="container mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "The Bitter End",
    description: "441 Clement St San Francisco , California 94118",
    link: "https://nitelifenav.com/listings/the-bitter-end/",
    image:
      "https://nitelifenav.com/wp-content/uploads/2020/01/A2004766-0BA5-448C-922B-7DFC2D867FB9.jpeg", // Örneğin
  },
  {
    title: "Monkey Bar",
    description: "26 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/monkey-bar/",
    image:
      "https://nitelifenav.com/wp-content/uploads/2018/07/Monkey-Bar-Orlando.jpg",
  },
  {
    title: "Sideshow",
    description: "15 N. Orange Ave Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/sideshow/",
    image:
      "https://nitelifenav.com/wp-content/uploads/2018/07/Sideshow-Orlando.png",
  },
  {
    title: "Waitiki",
    description: "26 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/waitiki/",
    image:
      "https://nitelifenav.com/wp-content/uploads/2018/07/Waitiki-Orlando.jpg",
  },
  {
    title: "Shine",
    description: "25 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/shine/",
    image:
      "https://nitelifenav.com/wp-content/uploads/2018/07/shine-orlando-2.png",
  },
  {
    title: "Hen House",
    description: "11 Wall St Orlando, FL 32801",
    link: "https://nitelifenav.com/listings/hen-house/",
    image:
      "https://nitelifenav.com/wp-content/uploads/2018/07/henhouse_slide1.jpg",
  },
];
