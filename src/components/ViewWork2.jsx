import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
// import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Company from '../assets/qugates.svg';

function ViewWork2() {
  
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/work');
  };

  return (
    <Box>
      {/* Header Icons */}
      <Box display="flex" alignItems="center" p={1}>
        <ArrowBack style={{ marginRight: 16, cursor: 'pointer' }} onClick={handleBackClick} />
        <Delete style={{ cursor: 'pointer' }} />
      </Box>

      {/* Company Name */}
      <Box>
        <Typography variant="h5" align="center" fontWeight="bold">
          Qugates Technology Pvt Ltd
        </Typography>
      </Box>

      {/* Company Logo and Role */}
      <Box display="flex" alignItems="center" justifyContent="space-between" px={2} py={1}>
        <Box display="flex" alignItems="center">
          <img
            src={Company}
            alt="Qugates Logo"
            style={{ cursor: 'pointer', marginRight: 16 }}
          />
          <Typography><strong>Full-Stack Developer</strong></Typography>
        </Box>
        <Box>
          <Star style={{ cursor: 'pointer', marginRight: 10 }} />
          <InsertEmoticon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>

      {/* Introduction and Bio */}
      <Box px={4} py={2}>
        <Typography variant="body1" paragraph>
          I'm <strong>Akshar K H</strong>, a proactive Full Stack Developer currently pursuing my degree at DSATM. I specialize in building cutting-edge web applications and ML-driven solutions with JavaScript, React.js, Node.js, MongoDB, and SQL. I thrive in environments that push me to innovate and optimize user experiences.
        </Typography>

        {/* Real-Time Proctoring System */}
        <Typography variant="h6" fontWeight="bold" paragraph>
          Real-Time Proctoring System
        </Typography>
        <Typography variant="body1" paragraph>
          At Qugates, I engineered a robust test proctoring solution that runs entirely in the browser. Using <strong>TensorFlow.js</strong> and the <strong>Coco-SSD</strong> model, I detect and monitor exam environments in real time. I integrated <strong>face-api.js</strong> for identity verification and <strong>PoseNet</strong> for behavior tracking (e.g., head pose, eye closure). By performing all ML inference on the frontend, the system maintains user privacy, minimizes latency, and avoids streaming video data to a server. To optimize performance, I implemented:
        </Typography>
        <Typography component="div" variant="body1" paragraph>
          - Dynamic model loading and caching strategies to reduce initial load time.<br />
          - Frame-skipping and throttling to balance accuracy with CPU usage.<br />
          - Custom overlays in React for live feedback and alerts when anomalies are detected.<br />
          - Comprehensive unit tests for critical detection routines using <strong>Jest</strong>.
        </Typography>

        {/* Student Catalog – Resume Builder */}
        <Typography variant="h6" fontWeight="bold" paragraph>
          Student Catalog – Resume Builder
        </Typography>
        <Typography variant="body1" paragraph>
          To empower students, I developed a resume builder application from scratch. The platform features a modular form workflow and live preview, allowing users to craft professional resumes intuitively. Key implementation details include:
        </Typography>
        <Typography component="div" variant="body1" paragraph>
          - Responsive React components styled with <strong>Material-UI</strong> and <strong>Tailwind CSS</strong>.<br />
          - State management with <strong>Redux</strong> and Context API to handle multi-step forms and theme customization.<br />
          - PDF generation via <strong>html-to-pdf</strong>, with templating support for multiple resume layouts.<br />
          - RESTful backend APIs built in <strong>Node.js</strong>/Express.js, connected to <strong>MongoDB</strong> for saving user profiles and resume history.<br />
          - Secure authentication with <strong>JWT</strong> and role-based access to premium templates.
        </Typography>

        {/* Subscription Plans System */}
        <Typography variant="h6" fontWeight="bold" paragraph>
          Subscription Plans System
        </Typography>
        <Typography variant="body1" paragraph>
          I’m currently architecting a shopping and pricing subsystem for plant subscriptions tailored to Qugates’ service offerings. This involves designing user dashboards, dynamic plan selectors, and streamlined checkout flows. Highlights:
        </Typography>
        <Typography component="div" variant="body1" paragraph>
          - Interactive plan comparison UI with customizable intervals and add-ons.<br />
          - Serverless functions in AWS Lambda for pricing calculations and order processing.<br />
          - Secure payment integration using Stripe API, with webhook handling for real-time order updates.<br />
          - Reusable React hooks for cart management and user address auto-fill.<br />
          - End-to-end testing with <strong>React Testing Library</strong> and Postman collections for API validation.
        </Typography>

        {/* Footer Link */}
        <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          Explore more of my work on the Qugates Developer Portal:{' '}
          <Link to="https://qugates.com/dashboard" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold' }}>
            Qugates Developer Portal
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewWork2;
