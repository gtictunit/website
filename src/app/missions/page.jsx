import React from "react";
import { HeaderOverlay } from "../../components";

const Missions = () => {
  return (
    <>
      <HeaderOverlay>Missions</HeaderOverlay>
      <section className="w-full container mx-auto flex justify-center">
        <div className="p-[20px] md:p-[100px]">
          <div class="">
            <div class="md:mx-[10vh]">
              <h1 class="font-josefin_sans text-[30px] md:text-[45px] font-semibold">
                The Beginning Of Mission Support
                <div class="w-full h-[4px] bg-[#a71919]"></div>
              </h1>
              <br />
              <span class="font-raleway">
                The Glory Tabernacle Ministry was established on 7th January,
                1990. It is a single congregation Ministry which has been
                involved in missions work from its inception. One very unique
                experience the ministry had from the beginning was that the Lord
                inspired the leadership of the Ministry on the need to tithe all
                the tithes and offerings. The tithe of tithes was designated for
                mission support. In this way, the fund for mission support was
                secured. This was the direct outcome of the favorable
                disposition of the Pastor to missions. <br />
                <br />
                <p>
                  The missions support has had intensive growth all glory be to
                  God and has now dedicated itself by establishing different
                  programs and different teams and other activities such as{" "}
                  <b>
                    Annual Mission, Awareness Week, Missions Luncheon (for
                    mobilizing Pastors), Missionary Children Carnival
                  </b>{" "}
                  and so on
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Missions;
