import React from "react";

export default function Landing({ data }) {
  const theLanding = function () {
    return data.store.find((e) => e.hottest === true);
  };
  const dataLanding = theLanding();
  return (
    <div>
      Welcome {data.user} . hottest {dataLanding.item} for {dataLanding.price}
    </div>
  );
}
