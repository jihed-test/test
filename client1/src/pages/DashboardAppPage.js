import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import scrapeHtmlWeb from "scrape-html-web";
import { FaFlask } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaUniversity } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const options = {
  url: "https://dev.to/collegewap/web-scraping-react-application-using-nodejs-bga",


};

export default function DashboardAppPage() {
  useEffect(() => {
    async function fetchData() {
      const data = await scrapeHtmlWeb(options);
      console.log(data);
    }; fetchData()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col><div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }} >
            <FaGraduationCap className="fa fa-graduation-cap"
            speechify-initial-font-family="FontAwesome"
            speechify-initial-font-size="50px"
            style={{ fontFamily: "FontAwesome", fontSize: 35 }} />
            <br/>
            <strong
              data-to={33000}
              data-append="+"
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="50px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 50
              }}
            >
              33000+
            </strong><br/>
            <label
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="20px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 20
              }}
            >
              Étudiants
            </label></div></Col>
          <Col><div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }} >
             <FaFlag className="fa fa-graduation-cap"
            speechify-initial-font-family="FontAwesome"
            speechify-initial-font-size="50px"
            style={{ fontFamily: "FontAwesome", fontSize: 35 }} /><br/>
            <strong
              data-to={37}
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="50px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 50
              }}
            >
              37
            </strong> <br/>
            <label
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="20px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 20
              }}
            >
              Nationalités
            </label></div></Col>
          <Col> <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }} >
            <FaUniversity className="fa fa-graduation-cap"
            speechify-initial-font-family="FontAwesome"
            speechify-initial-font-size="50px"
            style={{ fontFamily: "FontAwesome", fontSize: 35 }} /><br/>
            <strong
              data-to={15}
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="50px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 50
              }}
            >
              15
            </strong><br/>
            <label
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="20px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 20
              }}
            >
              Établissements
            </label></div></Col>
          <Col> <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }} >
            <FaFlask className="fa fa-graduation-cap"
            speechify-initial-font-family="FontAwesome"
            speechify-initial-font-size="50px"
            style={{ fontFamily: "FontAwesome", fontSize: 35 }} /><br/>
            <strong
              data-to={132}
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="50px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 50
              }}
            >
              132
            </strong><br/>
            <label
              speechify-initial-font-family='"Open Sans", Arial, sans-serif'
              speechify-initial-font-size="20px"
              style={{
                fontFamily: '"Open Sans", Arial, sans-serif',
                fontSize: 20
              }}
            >Structures de Recherche</label>
            </div>
          </Col>
        </Row>
      </Container>


      <iframe
        width="100%" height="371"
        src="https://docs.google.com/spreadsheets/d/1xcA5fRBvnY65lXjL--YU2nE8VRxKNTLFuYRTqYUmuZc/pubchart?oid=1846721813&format=interactive"
      ></iframe>
      <iframe
        width="100%" height="371"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp6FJyRchxwPdbDVx5vCHeGNdQHnWBXkMezz4pLYK5tfvHfoA41rxzAdJSta3MbLhWjTk5AIcTu5NS/pubchart?oid=1067771595&format=interactive"
      ></iframe>
      <iframe
        width="100%" height="371"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp6FJyRchxwPdbDVx5vCHeGNdQHnWBXkMezz4pLYK5tfvHfoA41rxzAdJSta3MbLhWjTk5AIcTu5NS/pubchart?oid=1053358849&format=interactive"
      ></iframe>
      <iframe
        width="100%" height="371"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp6FJyRchxwPdbDVx5vCHeGNdQHnWBXkMezz4pLYK5tfvHfoA41rxzAdJSta3MbLhWjTk5AIcTu5NS/pubchart?oid=1583845332&amp;format=interactive"
      ></iframe>
      <iframe
        width="100%" height="371"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp6FJyRchxwPdbDVx5vCHeGNdQHnWBXkMezz4pLYK5tfvHfoA41rxzAdJSta3MbLhWjTk5AIcTu5NS/pubchart?oid=1762543863&format=interactive"
      ></iframe>
      <iframe
        width="100%" height="371"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp6FJyRchxwPdbDVx5vCHeGNdQHnWBXkMezz4pLYK5tfvHfoA41rxzAdJSta3MbLhWjTk5AIcTu5NS/pubchart?oid=556416673&format=interactive"
      ></iframe>
      <iframe
        width="100%" height="571"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp6FJyRchxwPdbDVx5vCHeGNdQHnWBXkMezz4pLYK5tfvHfoA41rxzAdJSta3MbLhWjTk5AIcTu5NS/pubchart?oid=1851275551&format=interactive"
      ></iframe>



      {/* <iframe width="100%" height="371" seamless="" frameborder="0" scrolling="no"  ></iframe> */}
      <Button variant="secondary">Close</Button>

    </div>
  );
}


