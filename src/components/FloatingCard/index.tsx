import { ReactNode } from "react";
import "./FloatingCard.css";
import { IoMdClose } from "react-icons/io";

type Props = {
  title?: string;
  description?: string;
  children?: ReactNode;
  visible: boolean;
  controlVisible: Function;
  hasChildren?: boolean;
};

function FloatingCard({
  title,
  description,
  children,
  visible,
  controlVisible,
  hasChildren,
}: Props) {
  const handleClick = () => {
    controlVisible(false);
  };

  return (
    <>
      <div className={`floating-card-${visible ? "visible" : "invisible"}`}>
        <IoMdClose className="closing-x" onClick={handleClick} />
        {hasChildren ? (
          children
        ) : (
          <>
            <h2 className="card-title">{title}</h2>
            <p className="card-description inria-sans-light">{description}</p>
          </>
        )}
      </div>

      <div
        className={`card-background-${visible ? "visible" : "invisible"}`}
        onClick={handleClick}
      ></div>
    </>
  );
}

export default FloatingCard;
