"use client";

import { contactSchema, type ContactForm } from "@/schemas/contact";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useHookForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const [fsState, fsSubmit] = useForm<ContactForm>("meoljlry");

  const onSubmit = async (data: ContactForm) => {
    try {
      await fsSubmit(data);
      reset();
      toast.success("Message sent — thanks!");
    } catch {
      toast.error("Submission failed — please try again later.");
    }
  };

  return (
    <>
      <div className="mxd-section mxd-section-inner-form padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                <div className="col-12 col-xl-8">
                  <div className="mxd-block__content contact">
                    <div className="mxd-block__inner-form loading__fade">
                      <div className="form-container">
                        {/* Reply Messages */}
                        <div className="form__reply centered text-center">
                          <i className="ph-fill ph-smiley-wink reply__icon" />
                          <p className="reply__title">Done!</p>
                          <span className="reply__text">
                            Thanks for your message. We&apos;ll get back as soon
                            as possible.
                          </span>
                        </div>

                        {/* Contact Form */}
                        <form
                          className="form contact-form"
                          id="contact-form"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {/* Hidden Required Fields */}
                          <input
                            type="hidden"
                            name="project_name"
                            defaultValue="Rayo Template"
                          />
                          <input
                            type="hidden"
                            name="admin_email"
                            defaultValue="support@mixdesign.dev"
                          />
                          <input
                            type="hidden"
                            name="form_subject"
                            defaultValue="Contact Form Message"
                          />

                          {/* Visible Fields */}
                          <div className="container-fluid p-0">
                            <div className="row gx-0">
                              {/* Full Name */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="text"
                                  className="contact-field"
                                  placeholder="Full Name*"
                                  {...register("Name")}
                                />
                                {errors.Name && (
                                  <p className="error-message">
                                    {errors.Name.message}
                                  </p>
                                )}
                              </div>

                              {/* Email */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="email"
                                  className="contact-field"
                                  placeholder="Email Address*"
                                  {...register("E-mail")}
                                />
                                {errors["E-mail"] && (
                                  <p className="error-message">
                                    {errors["E-mail"].message}
                                  </p>
                                )}
                              </div>

                              {/* Phone */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="tel"
                                  className="contact-field"
                                  placeholder="Phone Number"
                                  {...register("Phone")}
                                />
                              </div>

                              {/* Company */}
                              {/* <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="text"
                                  className="contact-field"
                                  placeholder="Company Name"
                                  {...register("Company")}
                                />
                              </div> */}

                              {/* Subject */}

                              
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="text"
                                  className="contact-field"
                                  placeholder="Subject*"
                                  {...register("Subject")}
                                />
                                {errors.Subject && (
                                  <p className="error-message">
                                    {errors.Subject.message}
                                  </p>
                                )}
                              </div>

                              {/* Inquiry Category (dropdown) */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <select
                                  className="contact-field contact-select"
                                  {...register("InquiryCategory")}
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    Inquiry Category
                                  </option>
                                  <option value="General Inquiry">
                                    General Inquiry
                                  </option>
                                  <option value="Ticketing & Bookings">
                                    Ticketing &amp; Bookings
                                  </option>
                                  <option value="School Visits & Educational Programs">
                                    School Visits &amp; Educational Programs
                                  </option>
                                  <option value="Birthday & Event Planning">
                                    Birthday &amp; Event Planning
                                  </option>
                                  <option value="Franchise Opportunities">
                                    Franchise Opportunities
                                  </option>
                                  <option value="Partnerships & Sponsorships">
                                    Partnerships &amp; Sponsorships
                                  </option>
                                  <option value="Media & Press">
                                    Media &amp; Press
                                  </option>
                                  <option value="Careers">Careers</option>
                                  <option value="Feedback & Suggestions">
                                    Feedback &amp; Suggestions
                                  </option>
                                </select>
                                {errors.InquiryCategory && (
                                  <p className="error-message">
                                    {errors.InquiryCategory.message}
                                  </p>
                                )}
                              </div>

                              {/* City / Location (dropdown) */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <select
                                  className="contact-field contact-select"
                                  {...register("City")}
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    City / Location
                                  </option>
                                  <option value="Doha">Doha</option>
                                  <option value="Beirut">Beirut</option>
                                  <option value="Riyadh">Riyadh</option>
                                  <option value="Dubai">Dubai</option>
                                  <option value="Jeddah">Jeddah</option>
                                </select>
                                {errors.City && (
                                  <p className="error-message">
                                    {errors.City.message}
                                  </p>
                                )}
                              </div>

                              {/* Message */}
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <textarea
                                  className="contact-field"
                                  placeholder="Message"
                                  {...register("Message")}
                                />
                                {errors.Message && (
                                  <p className="error-message">
                                    {errors.Message.message}
                                  </p>
                                )}
                              </div>

                              {/* Submit Button */}
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <AnimatedButton
                                  text="Submit"
                                  position="next"
                                  as="button"
                                  className="btn btn-anim btn-default btn-large btn-opposite slide-right-up"
                                  type="submit"
                                  disabled={isSubmitting || fsState.submitting}
                                >
                                  <i className="ph-bold ph-arrow-up-right" />
                                </AnimatedButton>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* End Contact Form */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
}
