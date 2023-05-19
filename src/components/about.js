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
  const current = new Date();
  var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthName=months[current.getMonth()];
  const date = `${monthName}  ${current.getFullYear()}`;

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
<section id="about"  style={{paddingBottom:'3rem'}}>
    <>
     < Timeline position = "alternate" > <TimelineItem  data-aos="fade-down">
    <TimelineOppositeContent sx={{
        m: 'auto 0'
      }} align="right" variant="body2" color="text.secondary">
   
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
  <TimelineItem data-aos-delay="100" data-aos="fade-down">
    <TimelineOppositeContent sx={{
        m: 'auto 0'
      }} variant="body2" color="text.secondary">
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
  <TimelineItem data-aos-delay="200" data-aos="fade-down">
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
  <TimelineItem data-aos-delay="100" data-aos="fade-down">
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
<h1 className="align-center text-centern text-black contact3 font-weight-bold">  Experience </h1>
<div className="  flex-wrap justify-content-center d-flex    text-center">
<div className="m-4 py-6"  style={{color:' black'}} data-aos-delay="500" data-aos="zoom-in-up">
      <div className="card" >
        <div className="card-body">
          <h3 style={{color:'#111F4D'}}>  Freelancer  </h3>
          <h5 className="card-title">  Full stack Developer</h5>
          <p  className="card-text" style={{color:'#00181a'}} > Gigs on Freelancer,Linkedin and Upwork <br/>
              <br/>
              Dec 2022 - {date}
              <br/>
              Nagpur, Maharashtra, India
              <br/>
              <br/></p>
        </div>
      </div>
    <br/>
    </div>

    <br/>
    <div className="m-4 py-6" style={{color:' black'}}  data-aos-delay="500" data-aos="zoom-in-up">

      <div className="card" >
        <div className="card-body">
          <h3 style={{color:'#111F4D'}} >  ACM Student Chapter, VNIT </h3>
          <h5 className="card-title">Project Head </h5>
          <p  className="card-text" style={{color:'#00181a',opacity:'80'}} >    <br/>
              ACM Student Chapter, VNIT
              <br/>
              Jul 2022 -{date}<br/>
              Nagpur, Maharashtra, India
              <br/></p>
        </div>
      </div>
    </div>
    <br/>
    <div className="m-4 py-6" style={{color:' black'}}  data-aos-delay="500" data-aos="zoom-in-up">

      <div className="card" >
        <div className="card-body">
          <h3 style={{color:'#111F4D'}} >  CSE Student council, VNIT </h3>
          <h5 className="card-title">Associate Department Representative </h5>
          <p  className="card-text" style={{color:'#00181a',opacity:'80'}} >    <br/>
          CSE Student council
              <br/>
              Jul 2022 -{date} <br/>
              Nagpur, Maharashtra, India
              <br/></p>
        </div>
      </div>
    </div>
  
     
</div>

</>
  </section>);
}
