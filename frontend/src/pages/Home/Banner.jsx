import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
      <div>
        <img src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
