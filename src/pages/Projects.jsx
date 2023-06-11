import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import mars from "../assets/projects/mars.png";
import CB from "../assets/projects/CB.png";
import diabeti from "../assets/projects/diabeti.png";
import wpshop from "../assets/projects/wpshop.png";
import apartamenti from "../assets/projects/apartamenti.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mars}
              isBlog={false}
              title="Galaxy Destination"
              description=" 'Galaxy Project' is an immersive website created using HTML, CSS, and JavaScript, dedicated to providing captivating information about space and the wonders of the galaxy. Dive into a mesmerizing virtual journey through the cosmos, where you can explore fascinating facts about celestial bodies, astronomical phenomena, and the mysteries of the universe. Experience stunning visuals, interactive features, and engaging content that will ignite your curiosity and expand your knowledge of the vast expanse beyond our planet. Embark on an educational adventure with the Galaxy Project and unlock the secrets of the cosmos from the comfort of your screen."
              ghLink="https://github.com/elmedinalita/Space.Galaxy.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabeti}
              isBlog={false}
              title="Diabetes"
              description="'Diabeti' is a comprehensive web project crafted solely with HTML and CSS, aimed at providing essential information about diabetes, a prevalent illness affecting millions worldwide. From a blank canvas, this meticulously designed website offers a wealth of knowledge, covering various aspects of diabetes, its causes, symptoms, management, and prevention. Explore a user-friendly interface that presents crucial insights, tips, and resources, empowering individuals to understand and navigate the complexities of living with diabetes. Discover educational content, practical advice, and valuable resources to help individuals manage their condition effectively and make informed decisions regarding their health ..."
              ghLink="https://github.com/elmedinalita/Diabeti.al.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wpshop}
              isBlog={false}
              title="E‑Commerce Website"
              description="Media's Shop is an exciting E-commerce website crafted using WordPress introducing a delightful sweetshop that will captivate your taste buds. As your inaugural venture into the world of online commerce, this enticing platform offers a wide range of delectable treats to satisfy any craving. Explore the carefully designed menus, including Home, About Me, Reviews, Blog, Contact, and Order Now, each serving a unique purpose in enhancing your shopping experience. Discover the Home page, where you'll find a captivating introduction to the shop's irresistible offerings. Delve into the About Me section to learn more about the shop's story and passion for creating delectable delights. Engage with genuine customer experiences by perusing the Reviews section..."
              ghLink="https://github.com/elmedinalita/Medina-s-Shop-Wordpress.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CB}
              isBlog={false}
              title="Contact Book"
              description= "The Contact Book website is a user-friendly platform developed using C#, offering a convenient solution for managing your phone numbers. With its intuitive interface, this website allows you to effortlessly add, save, edit, and delete your contact information. Seamlessly organize your contacts, ensuring easy accessibility and efficient management. The standout feature of the Contact Book website is the ability to export your contacts into an Excel file."
              ghLink="https://github.com/elmedinalita/ContactBook.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apartamenti}
              isBlog={false}
              title="Project Apartamet/Flat"
              description="The Apartment/Flat Management Windows app is a powerful application developed using C#, designed to streamline and simplify the management of apartments or flats. With its comprehensive features and intuitive interface, this app serves as an essential tool for property managers, landlords, and residents alike.
              This Windows app offers a range of functionalities to efficiently handle apartment-related tasks."
              ghLink= "https://github.com/elmedinalita/Apartament-Project.git"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empty}
              isBlog={false}
              title="Comming soon"
              description=""
              ghLink= "https://github.com/elmedinalita/Apartament-Project.git"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects