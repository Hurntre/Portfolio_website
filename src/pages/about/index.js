import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { about_section, meta, worktimeline, education } from '../../content_option';

export const About = () => {
  return (
    <HelmetProvider>
      <Container className='About-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> About | {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='mb-3 mt-3'>
          <Col lg='8'>
            <h1 className='display-4 mb-4'>About</h1>
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>

        {/* About Write up */}
        <Row className='sec_sp'>
          <Col lg='12' className='d-flex align-items-center'>
            <div>
              <p>
                {about_section.lead_paragraph} <br></br>
              </p>
              <p>
                {about_section.technical_expertise}
              </p>
              <p>
                {about_section.business_acumen}
              </p>
              <p>
                {about_section.problem_solving_and_impact}
              </p>
              <p>
                {about_section.approach_to_development}
              </p>
              <p>
                {about_section.why_choose_me}
              </p>
              <p>
                {about_section.connect_with_me}
              </p>
            </div>
          </Col>
        </Row>

        {/* Experience */}
        <Row className='sec_sp'>
          <Col lg='5'>
            <h3 className='color_sec py-4'>Experience</h3>
          </Col>
          <Col lg='7'>
            <table className='table caption-top'>
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <><tr key={i}>
                      <td>{data.jobTitle}</td>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                    <tr key={`${i}description`}>
                    <td colSpan={3} className='py-5'>{data.description}</td>
                    </tr></>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className='sec_sp'>
          <Col lg='5'>
            <h3 className='color_sec py-4'>Education</h3>
          </Col>
          <Col lg='7'>
            <table className='table caption-top'>
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data.program}</td>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* Skills */}
        {/* <Row className='sec_sp'>
          <Col lg='5'>
            <h3 className='color_sec py-4'>Skills</h3>
          </Col>
          <Col lg='7'>
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className='progress-title'>{data.name}</h3>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className='progress-value'>{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row> */}

        {/* Services  */}

        {/* <Row className='sec_sp'>
          <Col lang='5'>
            <h3 className='color_sec py-4'>Services</h3>
          </Col>
          <Col lg='7'>
            {services.map((data, i) => {
              return (
                <div className='service_ py-4' key={i}>
                  <h5 className='service__title'>{data.title}</h5>
                  <p className='service_desc'>{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
