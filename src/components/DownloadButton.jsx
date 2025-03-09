import React from "react";
import Button from "./Button";

const DownloadButton = () => {
  return (
    <Button
      label="Download CV"
      href="/docs/CV_Frontend_Masiukevych.pdf"
      className="mt-6 text-base text-white uppercase bg-red-600 rounded-md cursor-pointer hover:bg-red-700 h-14"
      isDownload={true}
    />
  );
};

export default DownloadButton;