import React from "react";

import Comments from "@/components/sections/Comments";
import { FeaturedVenuesPaginationSection } from "@/components/sections/FeaturedVenuesPagination";

const page = () => {
  return (
    <div className="container my-24 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="my-6 text-2xl font-bold">Terms and Conditions</h1>
      <p className="m-auto font-thin italic lg:px-[12rem]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
        consequatur magni provident! Fuga unde vel rem repellendus vero error,
        ea beatae saepe totam labore voluptatem quis est quae. Quasi, eveniet?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
        consequatur magni provident! Fuga unde vel rem repellendus vero error,
        ea beatae saepe totam labore voluptatem quis est quae. Quasi, eveniet?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
        consequatur magni provident! Fuga unde vel rem repellendus vero error,
        ea beatae saepe totam labore voluptatem quis est quae. Quasi, eveniet?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
        consequatur magni provident! Fuga unde vel rem repellendus vero error,
        ea beatae saepe totam labore voluptatem quis est quae. Quasi, eveniet?
      </p>
      <FeaturedVenuesPaginationSection />
      <Comments />
    </div>
  );
};

export default page;
