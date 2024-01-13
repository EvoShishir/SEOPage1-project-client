import React, { useState } from "react";
import "./Card.css";
import { FaRegComments } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import ModalComponent from "../ModalComponent/ModalComponent";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="flex">
          <div className="flex gap">
            <img
              src="https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg?ct=jpeg"
              alt=""
            />
            <h5>Client Name</h5>
          </div>
          <div className="flex gap">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/44/43/50/1000_F_244435000_orBnSERPq9fO8MjkGnEH55FeKQKRPdm4.jpg"
              alt=""
            />
            <h5>Shishir</h5>
          </div>
        </div>
        <div className="flex">
          <p className="flex gap">
            <BsStack />
            Lorem ipsum dolor sit amet...
          </p>
          <h5 className="flex">
            <AiOutlineContainer />
            1/2
          </h5>
        </div>
        <div className="flex gap">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/44/42/79/1000_F_244427911_aoHHulebtYy4wLpncBBuWqCTNFKolcCB.jpg"
            alt=""
          />
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/44/43/91/1000_F_244439183_Wn6zbxmjuJTCaRodCGH9MFDUL1r3yCuK.jpg"
            alt=""
          />
          <div
            style={{
              backgroundColor: "gainsboro",
              padding: "5px 3px",
              borderRadius: "50%",
            }}
          >
            <b>12+</b>
          </div>
          <h4 className="flex">
            <FaRegComments />
            15
          </h4>
          <ModalComponent />
          <h4 className="flex">
            <FaRegCalendarDays />
            12-01-2024
          </h4>
        </div>
      </div>
    </>
  );
};

export default Card;
