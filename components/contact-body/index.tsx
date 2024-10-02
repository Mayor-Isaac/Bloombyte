"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";

type Form = {
  email: string;
  name: string;
  subject: string;
  messages: string;
};

const ContactBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<Form> = (e) => {
    setLoading(true);
    const data = {
      name: e.name,
      subject: e.subject,
      from: e.email,
      body: `<p>Hi Bloombyte, ${e.name} sent you a message</p>
              <p>${e.messages}</p>`,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(`/api/send`, options)
      .then(() => {
        toast.success("Message sent Successfully");
        setLoading(false);
        reset();
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong!! Please try again");
      });
  };

  return (
    <div className={styles.contactBody}>
      <div className={styles.contactForm}>
        <div className={styles.contactHeader}>
          <h2>We&apos;re Here to Help!</h2>
          <p>We value your feedback and are committed to providing you with exceptional support.</p>
        </div>
        <form className={styles.formBody} onSubmit={handleSubmit(submit)}>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Email Address" {...register("email", { required: "Email is required" })} />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Full Name" {...register("name", { required: "Full Name is required" })} />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Subject" {...register("subject", { required: "Subject is required" })} />
            {errors.subject && <span className="error">{errors.subject.message}</span>}
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Messages" {...register("messages", { required: "Messages is required" })} />
            {errors.messages && <span className="error">{errors.messages.message}</span>}
          </div>
          {loading ? (
            <Bars height="40" width="40" color="#0044ad" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
          ) : (
            <button type="submit">Submit</button>
          )}
        </form>
      </div>
      <Image src="/images/robot.png" width={500} height={500} alt="contact robot" className={styles.formImg} />
    </div>
  );
};

export default ContactBody;
