import { useEffect, useRef, useState } from "react";
import useElementOnScreenWithPosition from "../../hooks/useElementOnScreenWithPosition";
import useWindowWidth from "../../hooks/useWindowWidth";
import benefitImg1 from "../../images/benefit-1.webp";
import benefitImg2 from "../../images/benefit-2.webp";
import benefitImg3 from "../../images/benefit-3.webp";
import "./Benefits.css";

function Benefits() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeScrollAnimation, setActiveScrollAnimation] = useState(true);
  const windowWidth = useWindowWidth();
  const imageRef = useRef(null);
  const benefit0Ref = useRef(null);
  const benefit1Ref = useRef(null);
  const benefit2Ref = useRef(null);
  const minWidthForAnimation = 1200;

  const { isOnScreen: benefit0OnScreen, elementPosition: benefit0Position } =
    useElementOnScreenWithPosition(benefit0Ref);
  const { isOnScreen: benefit1OnScreen, elementPosition: benefit1Position } =
    useElementOnScreenWithPosition(benefit1Ref);
  const { isOnScreen: benefit2OnScreen, elementPosition: benefit2Position } =
    useElementOnScreenWithPosition(benefit2Ref);
  const { isOnScreen: imageOnScreen, elementPosition: imagePosition } =
    useElementOnScreenWithPosition(imageRef);

  useEffect(
    function shouldAnimate() {
      if (windowWidth < minWidthForAnimation) setActiveScrollAnimation(false);
      else setActiveScrollAnimation(true);
    },
    [windowWidth],
  );

  useEffect(
    function determineActiveImage() {
      if (
        !benefit0Ref.current ||
        !benefit1Ref.current ||
        !benefit2Ref.current ||
        !imageRef.current
      )
        return;

      if (benefit0OnScreen && benefit1Position?.top > imagePosition?.top) {
        setActiveImage(0);
      } else if (
        benefit1OnScreen &&
        benefit2Position?.top > imagePosition?.top
      ) {
        setActiveImage(1);
      } else if (benefit2OnScreen) {
        setActiveImage(2);
      } else {
        setActiveImage(0);
      }
    },
    [
      benefit0OnScreen,
      benefit1OnScreen,
      benefit2OnScreen,
      benefit0Position,
      benefit1Position,
      benefit2Position,
      imagePosition,
      imageOnScreen,
    ],
  );

  return (
    <section className="bg-white" aria-label="Benefits">
      <div className="column-small benefits">
        {activeScrollAnimation ? (
          <>
            <div className="benefit__text-column">
              <div className="benefit__content" ref={benefit0Ref}>
                <h2>Automated appointment booking and payment processing</h2>
                <p>
                  Encourage early booking with the personalized booking
                  environment created by Calendio. Our appointment booking
                  software easily integrates with your website, making it a
                  stress-free online booking experience for your client.
                </p>
              </div>

              <div className="benefit__content" ref={benefit1Ref}>
                <h2>Appointment reminders for all participants</h2>
                <p>
                  No more forgotten appointments. Our scheduling software will
                  automatically send email and SMS notifications so that both
                  the staff and the customers receive appointment reminders and
                  updates.
                </p>
              </div>

              <div className="benefit__content" ref={benefit2Ref}>
                <h2>Monitor your business performance</h2>
                <p>
                  The Calendio online booking system helps you increase sales by
                  providing important business reports and dashboards to help
                  you track the performance of your business through vital KPIs
                  and statistics.
                </p>
              </div>
            </div>

            <div className="benefit__image-column">
              <div className="benefit__image-wrapper" ref={imageRef}>
                <img
                  src={benefitImg1}
                  alt="Benefit Image 1"
                  className={`${activeImage === 0 ? "active-benefit" : ""}`}
                />
                <img
                  src={benefitImg2}
                  alt="Benefit Image 1"
                  className={`${activeImage === 1 ? "active-benefit" : ""}`}
                  loading="lazy"
                />
                <img
                  src={benefitImg3}
                  alt="Benefit Image 1"
                  className={`${activeImage === 2 ? "active-benefit" : ""}`}
                  loading="lazy"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="benefit" ref={benefit0Ref}>
              <div className="benefit__content">
                <h2>Automated appointment booking and payment processing</h2>
                <p>
                  Encourage early booking with the personalized booking
                  environment created by Calendio. Our appointment booking
                  software easily integrates with your website, making it a
                  stress-free online booking experience for your client.
                </p>
              </div>
              <div className="benefit__image-wrapper">
                <img
                  src={benefitImg1}
                  alt="Benefit Image 1"
                  className={`${
                    activeImage === 0 ? "active-benefit" : "inactive-benefit"
                  }`}
                />
              </div>
            </div>

            <div className="benefit">
              <div className="benefit__content" ref={benefit1Ref}>
                <h2>Appointment reminders for all participants</h2>
                <p>
                  No more forgotten appointments. Our scheduling software will
                  automatically send email and SMS notifications so that both
                  the staff and the customers receive appointment reminders and
                  updates.
                </p>
              </div>
              <div className="benefit__image-wrapper">
                <img
                  src={benefitImg2}
                  alt="Benefit Image 1"
                  className={`${
                    activeImage === 1 ? "active-benefit" : "inactive-benefit"
                  }`}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="benefit">
              <div className="benefit__content" ref={benefit2Ref}>
                <h2>Monitor your business performance</h2>
                <p>
                  The Calendio online booking system helps you increase sales by
                  providing important business reports and dashboards to help
                  you track the performance of your business through vital KPIs
                  and statistics.
                </p>
              </div>
              <div className="benefit__image-wrapper">
                <img
                  src={benefitImg3}
                  alt="Benefit Image 1"
                  className={`${
                    activeImage === 2 ? "active-benefit" : "inactive-benefit"
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Benefits;
