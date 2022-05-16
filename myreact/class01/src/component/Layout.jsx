import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import ReactsList from './ReactsList'
import Alerts from './Alerts'
import Badges from './Badges'
import Dropdowns from './Dropdowns'
import ButtonsGroup from './ButtonsGroup'
import ReactCard from './ReactCard'
import ReactCarousel from './ReactCarousel'

const Layout = () => {
  return (
    <Container>
      <ReactCarousel />
      <div className="d-flex justify-content-end">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#top">Top</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#now">Now</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Row xs="2">
        <Col>
          <ReactsList />
        </Col>
        <Col>
          <Alerts />
        </Col>
        <Col><Badges /></Col>
        <Col><Dropdowns /></Col>
        <Col><ButtonsGroup /></Col>
        <Col><ReactCard /></Col>
      </Row>
    </Container>
  )
}

export default Layout