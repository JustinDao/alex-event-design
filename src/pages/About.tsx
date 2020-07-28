import React from "react";
import { NavBar } from "../common/Navbar";
import { Container, Row, Col } from "react-bootstrap";

export function About() {
  return (
    <React.Fragment>
      <NavBar />
      <Container fluid>
        <Row style={{ textAlign: "center", marginTop: "50px" }}>
          <Col xs={{ span: 4, offset: 1 }}>
            <img src="/pupper.jpg" style={{ maxWidth: "100%" }}></img>
          </Col>
          <Col
            xs={{ span: 4, offset: 2 }}
            className="align-middle"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
            ipsum, efficitur vitae posuere nec, fringilla ut dui. Etiam eleifend
            aliquet dolor a elementum. Cras nisl enim, feugiat a turpis a,
            lacinia mollis ligula. Quisque sed lacus venenatis, malesuada lorem
            vitae, mollis metus. Integer in quam elit. Sed tincidunt tortor nec
            varius elementum. Pellentesque semper urna nec ipsum tincidunt
            bibendum. Curabitur varius tellus id massa dignissim scelerisque. Ut
            sodales eros augue, non mattis nisl accumsan a. Nunc eget diam
            iaculis erat tempus accumsan. Proin tempor erat et cursus imperdiet.
            Ut sed enim mi. Sed ut mi neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas ullamcorper risus odio, sed
            dapibus lacus pretium sit amet. Nullam consequat felis quis leo
            tempus, vel egestas nisl rutrum. Sed leo turpis, pretium sed eros
            eu, cursus tincidunt risus. Cras vitae augue vestibulum,
            pellentesque lectus nec, molestie arcu. Pellentesque rhoncus
            consectetur risus, ut placerat dolor dapibus eu. Maecenas vitae
            volutpat erat. Fusce lorem mi, imperdiet quis nisl eu, tempus
            vehicula sem. Nulla sem diam, aliquet a ex nec, ullamcorper
            elementum enim. Cras lacus libero, tempus ut mauris eu, pulvinar
            condimentum lorem. Nullam ut tristique tellus, eu vestibulum odio.
            Nunc molestie quis dolor porta congue. Donec suscipit leo dui. Sed
            semper blandit nisl nec pellentesque.
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
