import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import MovingComponent from "react-moving-text";
const Component = () => {
  return (
    <div className="">
      <ParallaxProvider>
        <ParallaxBanner
          id="scroll"
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              speed: 15,
            },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* hello world */}
                </div>
              ),
            },
            {
              image:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
              speed: 30,
            },
            {
              translateY: [0, 30],
              scale: [1, 1.25, "easeOutCubic"],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
              children: (
                <div
                  className="absolute inset center  flex items-center text-center justify-center"
                  style={{ zIndex: "-1" }}
                >
                  <Parallax speed={-15}>
                    <MovingComponent
                      type="shakeMix"
                      duration="2000ms"
                      timing="linear"
                      fillMode="forwards"
                      iteration={1000}
                    >
                      <h4
                        className="  display-3  sticky-top text-white"
                        style={{ paddingTop: "12rem" }}
                      >
                        thank you for visiting 
                      </h4>
                    </MovingComponent>
                  </Parallax>
                 
                </div>
              ),
            },
            {
              opacity: [1, 0, "easeOutCubic"],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
              children: <div className="gradint inset" />,
            },
          ]}
          className="aspect-[2/1]"
        >
          <div
            className="absolute inset center  flex items-center text-center justify-center"
            style={{ zIndex: "-1" }}
          >
            <Parallax speed={-15}>
              <h1
                className="  display-3  sticky-top text-white"
                style={{ paddingTop: "12rem" }}
              >
               
              </h1>
            </Parallax>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
};
export default Component;
