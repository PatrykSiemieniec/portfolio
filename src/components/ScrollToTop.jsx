import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        setHeight(window.visualViewport?.height);
        setMobile(true);
      }
      setHeight(window.innerHeight);
      setMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonPosition = height - 100;
  const mobilePhonePosition = height;

  return (
    <div
      className="lg:top[750px] fixed top-[600px] right-3  z-[60] flex justify-end transition-opacity md:top-[700px]"
      style={{ top: mobile ? mobilePhonePosition : buttonPosition }}
    >
      {showBtn && (
        <button className=" p-4 text-liver " onClick={scrollTop}>
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
