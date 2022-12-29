import React from 'react'
import VisualCMD from '../components/VisualCMD'
import CMD from '../styles/StyledComponent/CMD'
import { matrixData, scriptArray } from '../static/constant'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TextColorWrapper from '../styles/StyledComponent/TextColorWrapper';
import SlimeText from '../components/SlimeText';
import ShadowMatrix from '../components/ShadowMatrix';
import { generateMetrix } from '../methods/generateMetrix';
import Post from '../components/Post';

function Home() {
  const generatedMetrix = generateMetrix(100);
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <TextColorWrapper>yyyyy</TextColorWrapper>
          </Col>
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <CMD>
              {/* <VisualCMD data={scriptArray} /> */}
            </CMD>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <TextColorWrapper>
              <SlimeText text="This is extra small text" size="xs" />
              <SlimeText text="Thi is small text" size="sm" />
              <SlimeText text="This is medium text" size="md" />
              <SlimeText text="This is large text" size="lg" />
              <SlimeText text="This is extra large text" size="xl" />
            </TextColorWrapper>
          </Col>
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <TextColorWrapper>
              yoyooyoy
            </TextColorWrapper>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <TextColorWrapper>
              yoyoyoyo
            </TextColorWrapper>
          </Col>
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <TextColorWrapper>
              {/* <ShadowMatrix matrix={generatedMetrix} /> */}
            </TextColorWrapper>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <TextColorWrapper>
              <Post />
            </TextColorWrapper>
          </Col>
          <Col xs={12} lg="6" style={{ border: "1px solid red" }}>
            <TextColorWrapper>
              yoyo
            </TextColorWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
