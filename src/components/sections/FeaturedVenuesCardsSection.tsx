import { HoverEffect } from "@/components/ui/card-hover-effect";

export function FeaturedVenuesCardsSection() {
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
    link: "https://.com/listings/the-bitter-end/",
    image: "/example1.png",
  },
  {
    title: "Monkey Bar",
    description: "26 Wall St Orlando, FL 32801",
    link: "https://.com/listings/monkey-bar/",
    image: "/example2.png",
  },
  {
    title: "Sideshow",
    description: "15 N. Orange Ave Orlando, FL 32801",
    link: "https://.com/listings/sideshow/",
    image: "/example3.png",
  },
  {
    title: "Waitiki",
    description: "26 Wall St Orlando, FL 32801",
    link: "https://.com/listings/waitiki/",
    image: "/example4.png",
  },
  {
    title: "Shine",
    description: "25 Wall St Orlando, FL 32801",
    link: "https://.com/listings/shine/",
    image: "/example5.png",
  },
  {
    title: "Hen House",
    description: "11 Wall St Orlando, FL 32801",
    link: "https://.com/listings/hen-house/",
    image: "/example6.png",
  },
];
