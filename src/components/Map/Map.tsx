import React from "react";

const Map = () => {
  return (
    <section className="mb-20">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A46793907ce3a4f934a8f91e997d8658c9e5bf862335cdde8921beafdb15db368&amp;source=constructor"
        style={{
          width: "100%",
          height: "500px",
          outline: "none",
          marginTop: "10rem",
          borderRadius: "1rem",
        }}
      ></iframe>
    </section>
  );
};

export default Map;
