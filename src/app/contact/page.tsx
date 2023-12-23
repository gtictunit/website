import React from "react";
import styles from "./contact.module.css";
import { HeaderOverlay } from "../../components";

const Contact = () => {
  return (
    <>
      <div className="">
        <div className={"relative"}>
          <HeaderOverlay>Reach us</HeaderOverlay>

          <div className={styles.contact_wrapper}>
            <div className="container-xl">
              <div className={styles.address}>
                <h4>We are located at:</h4>
                <p>
                  Bethel land, Glory Tabernacle Ministry, Ojurin Bodija, Ibadan
                </p>
              </div>

              <div className={styles.contact_cta}>
                <div className={styles.contact_card}>
                  <div className={styles.icon_wrapper}>
                    <img src="./assets/images/email.png" alt="" width="100%" />
                  </div>
                  <div className={styles.contact_details}>
                    <h4>Email</h4>
                    <div>
                      <p>support@email.com</p>
                    </div>
                  </div>
                </div>
                <div className={styles.contact_card}>
                  <div className={styles.icon_wrapper}>
                    <img src="./assets/images/phone.png" alt="" width="100%" />
                  </div>
                  <div className={styles.contact_details}>
                    <h4>Call us</h4>
                    <div>
                      <p>+234-818-074-6707</p>
                    </div>
                  </div>
                </div>

                <div className={styles.contact_card}>
                  <div className={styles.icon_wrapper}>
                    <img
                      src="./assets/images/location-pin.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className={styles.contact_details}>
                    <h4>Address</h4>
                    <div>
                      <p>support@email.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={"w-full bg-[#f9f9f9]"}>
            <div className="container mx-auto">
              <div className="px-[20px] md:px-[40px]">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  <div className={`w-full md:w-2/5 py-[100px]`}>
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
                      "w-full md:w-2/5 h-[400px] mb-[30px] md:mb-0 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]"
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
