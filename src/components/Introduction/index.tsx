import { ReactNode, useEffect, useState } from "react";
import "./Introduction.css";
import ImageDescription from "./ImageDescription";

function Introduction() {
  let imageDescriptionArray: ReactNode[] = [];
  imageDescriptionArray.push(
    <ImageDescription
      image={"/public/images/rocket.svg"}
      key={"/public/images/rocket.svg"}
      title={"Value Creation"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum velit nunc, et porta dui pellentesque vel. Sed consequat vehicula maximus. Cras vehicula massa auctor, elementum urna in, laoreet nisi. Phasellus consectetur sem vel eros efficitur, id ornare massa ultrices. Aliquam erat volutpat"
      }
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/analysis.svg"}
      key={"/public/images/analysis.svg"}
      title={"Visualization"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/api.svg"}
      key={"/public/images/api.svg"}
      title={"Data Engineering"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/webdev.svg"}
      key={"/public/images/webdev.svg"}
      title={"Web Development"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/security.svg"}
      key={"/public/images/security.svg"}
      title={"Data Security"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/apple.svg"}
      key={"/public/images/apple.svg"}
      title={"Outside the box"}
      description={"This is an awsome description"}
    ></ImageDescription>
  );
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // Función para actualizar el tamaño de la ventana
  const handleResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let smallScreen = false;

  if (windowSize.width < 1024) {
    smallScreen = true;
  }

  return (
    <section
      className="introduction inria-sans-regular"
      style={{
        height: smallScreen
          ? "auto"
          : `${
              windowSize.height / window.screen.height > 0.8
                ? "100vh"
                : (window.screen.height * 0.8).toString() + "px"
            }`,
      }}
    >
      <div className="inner-introduction-container">
        {imageDescriptionArray}
      </div>
    </section>
  );
}

export default Introduction;
