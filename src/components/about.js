import React, { useEffect} from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Aos from "aos";
import "aos/dist/aos.css"
export default function CustomizedTimeline() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
<section id="about"  style={{paddingBottom:'3rem'}}>
    <>
     < Timeline position = "alternate" > <TimelineItem data-aos-delay="500" data-aos="fade-down">
    <TimelineOppositeContent sx={{
        m: 'auto 0'
      }} align="right" variant="body2" color="text.secondary">
      9:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector/>
      <TimelineDot>
        <FastfoodIcon/>
      </TimelineDot>
      <TimelineConnector/>
    </TimelineSeparator>
    <TimelineContent sx={{
        py: '12px',
        px: 2
      }}>
      <Typography variant="h6" component="span">
        Eat
      </Typography>
      <Typography>Because you need strength</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem data-aos-delay="500" data-aos="fade-down">
    <TimelineOppositeContent sx={{
        m: 'auto 0'
      }} variant="body2" color="text.secondary">
      10:00 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector/>
      <TimelineDot color="primary">
        <LaptopMacIcon/>
      </TimelineDot>
      <TimelineConnector/>
    </TimelineSeparator>
    <TimelineContent sx={{
        py: '12px',
        px: 2
      }}>
      <Typography variant="h6" component="span">
        Code
      </Typography>
      <Typography>Because it&apos;s awesome!</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem data-aos-delay="500" data-aos="fade-down">
    <TimelineSeparator>
      <TimelineConnector/>
      <TimelineDot color="primary" variant="outlined">
        <HotelIcon/>
      </TimelineDot>
      <TimelineConnector sx={{
          bgcolor: 'secondary.main'
        }}/>
    </TimelineSeparator>
    <TimelineContent sx={{
        py: '12px',
        px: 2
      }}>
      <Typography variant="h6" component="span">
        Sleep
      </Typography>
      <Typography>Because you need rest</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem data-aos-delay="500" data-aos="fade-down">
    <TimelineSeparator>
      <TimelineConnector sx={{
          bgcolor: 'secondary.main'
        }}/>
      <TimelineDot color="secondary">
        <RepeatIcon/>
      </TimelineDot>
      <TimelineConnector/>
    </TimelineSeparator>
    <TimelineContent sx={{
        py: '12px',
        px: 2
      }}>
      <Typography variant="h6" component="span">
        Repeat
      </Typography>
      <Typography>Because this is the life you love!</Typography>
    </TimelineContent>
  </TimelineItem>
</Timeline>
<h1 className="align-center text-center"> <kbd> Experience </kbd> </h1>
<div className="  flex-wrap justify-content-center d-flex    text-center">


    <br/>
    <div className="m-4 py-6" style={{color:' black'}}  data-aos-delay="500" data-aos="zoom-in-up">

      <div class="card" >
        <div class="card-body">
          <h3>  ACM Student Chapter, VNIT </h3>
          <h5 class="card-title">Frontend Developer</h5>
          <p class="card-text">    <br/>
              ACM Student Chapter, VNIT
              <br/>
              Jan 2022 - Present 2 months+
              Nagpur, Maharashtra, India
              <br/></p>
        </div>
      </div>
    </div>

    <div className="m-4 py-6"  style={{color:' black'}} data-aos-delay="500" data-aos="zoom-in-up">
      <div class="card" >
        <div class="card-body">
          <h3>  Institute Development Society </h3>
          <h5 class="card-title">  Web Developer</h5>
          <p class="card-text">    Institute Development Society, VNIT Nagpur
              <br/>
              Dec 2021 - Present 3 months+

              Nagpur, Maharashtra, India
              <br/>
              <br/></p>
        </div>
      </div>
    <br/>
    </div>
      <div className="m-4 py-6 " style={{color:' black'}} data-aos-delay="500" data-aos="zoom-in-up">
        <div class="card" >
          <div class="card-body">
            <h3>    Technical Secretary </h3>
            <h5 class="card-title">VNIT Nagpur</h5>
            <p class="card-text">Jul 2021 - Present 8 months+
            Maharashtra, India</p>
          <br/>
          </div>
        </div>
    </div>
</div>

</>
  </section>);
}
