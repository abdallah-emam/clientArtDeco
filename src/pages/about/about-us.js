// import "./about-us.css";
import { ReactComponent as WorkIcon } from "./work.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { useEffect } from "react";

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let workIconStyles = { background: "#ff8a00" };
  return (
    <div>
      <br /> <br />
      <h1 className="text-center m-5 text-muted">How ArtDeco works?</h1>
      <br /> <br />
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : workIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
        <br /> <br />
      </VerticalTimeline>
    </div>
  );
}

export default AboutUs;
