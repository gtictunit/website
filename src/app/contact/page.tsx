import React from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import { HeaderOverlay } from "../../components";

import phone from "../../../public/assets/images/phone.png";
import email from "../../../public/assets/images/email.png";
import location from "../../../public/assets/images/location-pin.png";

const contact_card =
  "w-full shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] border border-transparent border-solid bg-white p-[12px] md:p-[20px] flex items-center gap-[18px] md:gap-[24px] h-full flex-1";
const icon_wrapper = "w-[24px] h-[24px] md:w-[40px] md:h-[40px]";
const contact_title =
  "font-josefin_sans text-[#5c5c5c] text-[24px] font-semibold mb-0";
const contact_text = "text-[#979797] mb-0 ";

const Contact = () => {
  return (
    <>
      <div className="">
        <div className={"relative"}>
          <HeaderOverlay>Reach us</HeaderOverlay>

          <div className={"text-[#3d0052] bg-white"}>
            <div className="w-full container mx-auto px-[20px] md:px-[100px] py-[32px] md:py-[75px]">
              <div>
                <h4 className="font-montserrat text-[#353535] text-[24px] md:text-[45px] font-medium">
                  We are located at:
                </h4>
                <p className="font-raleway text-[#5c5c5c] text-[14px] md:text-[20px] font-normal">
                  Bethel land, Glory Tabernacle Ministry, Ojurin Bodija, Ibadan
                </p>
              </div>

              <div
                className={
                  "flex flex-col md:flex-row items-center justify-center gap-[32px] box-border h-full my-[30px] md:my-[75px]"
                }>
                <div className={contact_card}>
                  <div className={icon_wrapper}>
                    <Image src={email} alt="" />
                  </div>
                  <div>
                    <h4 className={contact_title}>Email</h4>
                    <div>
                      <p className={contact_text}>support@email.com</p>
                    </div>
                  </div>
                </div>
                <div className={contact_card}>
                  <div className={icon_wrapper}>
                    <Image src={phone} alt="" />
                  </div>
                  <div>
                    <h4 className={contact_title}>Call us</h4>
                    <div>
                      <p className={contact_text}>+234-818-074-6707</p>
                    </div>
                  </div>
                </div>

                <div className={contact_card}>
                  <div className={icon_wrapper}>
                    <Image src={location} alt="" />
                  </div>
                  <div>
                    <h4 className={contact_title}>Address</h4>
                    <div>
                      <p className={contact_text}>support@email.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={"w-full bg-[#f9f9f9]"}>
            <div className="container mx-auto  px-[20px] md:px-[100px] ">
              <div className="px-[20px] md:px-[40px]">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  <div className={`w-full py-[100px]`}>
                    <div className="mb-5">
                      <h3 className="font-josefin_sans text-black text-[28px] md:text-[42px] mb-[5px]">
                        Get in touch
                      </h3>
                      <p className="font-raleway text-[15px] text-[#838383]">
                        You can fill the form and we will get back to you.{" "}
                      </p>
                    </div>

                    <div className="">
                      <form
                        id="contact-form"
                        role="form"
                        method="post"
                        encType="text/plain"
                        action="mailto:noahtochukwu10@gmail.com"
                        className="font-montserrat">
                        <div className="w-full flex items-center justify-center gap-5 mb-4">
                          <div className="form-group w-full md:w-1/2">
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="w-full px-4 py-2 rounded-[4px] border border-solid border-[#838383]"
                              placeholder="Email Address"
                              required
                              data-error="Valid email is required."
                            />
                          </div>
                          <div className="form-group w-full md:w-1/2">
                            <input
                              id="form_need"
                              name="need"
                              className="w-full px-4 py-2 rounded-[4px] border border-solid border-[#838383]"
                              required
                              placeholder="Full Name"
                              data-error="Please enter your name."
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group">
                            <textarea
                              id="form_message"
                              name="message"
                              className="w-full px-4 py-2 rounded-[4px] border border-solid border-[#838383]"
                              placeholder="Write your message here."
                              rows={4}
                              required
                              data-error="Please, leave us a message."></textarea>
                          </div>
                          <br />
                          <div className="col-md-12">
                            <input
                              type="submit"
                              className={`${styles.submit_button}
  `}
                              value="Send Message"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className={
                      "w-full h-[400px] mb-[30px] md:mb-0 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]"
                    }>
                    <iframe
                      title=""
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.2974929237753!2d3.9175446!3d7.4322955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed51c6f2bf8f%3A0x2baa9ae9082a5ea0!2sGlory%20Tabernacle%20Ministry!5e0!3m2!1sen!2sng!4v1678534932864!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
