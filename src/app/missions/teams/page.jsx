import React from "react";
import { HeaderOverlay } from "../../../components";

const MissionTeams = () => {
  return (
    <div>
      <HeaderOverlay>Mission Support</HeaderOverlay>
      <section className="w-full container mx-auto flex justify-center">
        <div className="p-[20px] md:p-[100px]">
          <div class="font-raleway">
            <div class="md:mx-[10vh]">
              <h1 className="font-josefin_sans text-[30px] md:text-[45px] font-semibold">
                Mission Teams
                <div className="w-full h-[4px] bg-[#a71919]"></div>
              </h1>
              <br />
              <span class="">
                Members of the church who feel that they have missionary calling
                can avail themselves of the various opportunities provided in
                the church. There are three mission related teams in the church.
                <ul class="">
                  <li>
                    <b>Mission Support Group</b>
                  </li>
                  <ul>
                    <li> Raises material support for missionaries</li>
                    <li> Visits parents of missionaries</li>
                    <li> Organizes carnival for missionary children</li>
                    <li>
                      Correspond with missionaries - by letters, phoning, etc.
                    </li>
                  </ul>
                </ul>
                <ul class="">
                  <li>
                    <b>Mission Prayer Support Group</b>
                  </li>
                  <ul>
                    <li>
                      {" "}
                      Meets every Thursday to pray for missionaries and mission
                      agencies using the prayer/testimony bulletins provided by
                      the agencies.
                    </li>
                    <li>
                      {" "}
                      Writes to missionaries to update the status of their
                      prayer requests/testimonies
                    </li>
                  </ul>
                </ul>
                <ul class="">
                  <li>
                    <b>Short-term Mission Volunteers</b>
                  </li>
                  <ul>
                    <li>
                      {" "}
                      Organizes short term mission trips to assist missionaries
                      in the mission fields.
                    </li>
                    <li>
                      {" "}
                      Evaluates the effectiveness of the missionaries in the
                      field Identifies further possible areas of support in the
                      field.
                    </li>
                  </ul>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionTeams;
