import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>,
        <a href="tel:+12819356054">281 935 6054</a>.
      </p>
    </>
  );
};

export default GetInTouch;
