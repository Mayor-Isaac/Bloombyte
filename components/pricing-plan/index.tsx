import React from "react";
import styles from "./styles.module.css";
import { pricingData } from "@/utils/data";
import { formatter } from "@/utils/formatter";
import Link from "next/link";

const PricingPlan = () => {
  return (
    <div className={styles.pricingPlanContainer}>
      {pricingData?.map((items, index) => {
        return (
          <div className={styles.pricingPlanSingle} key={index}>
            <h2>{items.title}</h2>
            <div>
              <p>
                Daily - <span>{formatter.format(items.daily)}</span>
              </p>
              <p>
                Weekdays - <span>{formatter.format(items.weekdays)}</span>
              </p>
              <p>
                Monthly - <span>{formatter.format(items.monthly)}</span>
              </p>
              <p>
                Weekends - <span>{formatter.format(items.weekends)}</span>
              </p>
            </div>
            <Link href="https://wa.me/message/GZ3BTL22GI5CL1" target="_blank">
              <button>Book a Session</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PricingPlan;
