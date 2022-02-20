// const Response = require('../utils/response');
const { send } = require("express/lib/response");
const database = require("../utils/database");
require("dotenv").config();
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(sendgridTransport({
  auth : {
    api_key: process.env.SENDGRID_API_KEY 
  }
}));

// const HttpStatus = {
//     OK: {code : 200, status: 'OK'},
//     CREATED: {code : 201, status: 'CREATED'},
//     NO_CONTENT: {code : 204, status: 'NO_CONTENT'},
//     BAD_REQUEST: {code : 400, status: 'BAD_REQUEST'},
//     NOT_FOUND: {code : 404, status: 'NOT_FOUND'},
//     INTERNAL_SERVER_ERROR: {code : 500, status: 'INTERNAL_SERVER_ERROR'},

// };


exports.getCases = (req, res) => {
  database
    .query(`SELECT * FROM reports`, (err, result) => {
      if (err) {
        console.log(err);
      }
      else{
        console.log(result);
        res.send(result);
      }
  
    });
};

exports.getCaseById = (req, res) => {

  const caseId = req.params.caseId;

  database.query(`SELECT * FROM reports WHERE caseId = ${caseId}`,(err, result) => {
    if(err) {
      console.log(err);
      res.status(400).send(result);
    } else {
      res.status(200).send(result);
    }
  });
  
};

exports.createCases = (req, res) => {
  const uUID = req.body.uUID;
  const victimName = req.body.victimName;
  const vTime = req.body.vTime;
  const cType = req.body.cType;
  const severity = req.body.severity;
  const vLocation = req.body.vLocation;
  const inform = req.body.inform;
  const caseId = req.body.caseId;
  const cImage = req.body.cImage;
  const caseAccepted = req.body.caseAccepted;
  const orgAssigned = req.body.orgAssigned;
  const caseStatus = req.body.caseStatus;

  database
    .query(
      `INSERT INTO reports(uUID, caseId, victimName, vTime, cType, caseAccepted, orgAssigned, caseStatus, cImage, severity, vLocation, inform) VALUES('${uUID}', '${caseId}' ,'${victimName}', '${vTime}', '${cType}', '${caseAccepted}', '${orgAssigned}', '${caseStatus}','${cImage}','${severity}', '${vLocation}','${inform}')`, (err,result) => {
        if (err) {
          console.log(err);
        }
        else{
          console.log(result);
          res.send(result);
        }
    
      }
    );
};

exports.createUser = (req, res) => {
  const uUID = req.body.uUID;
  const userName = req.body.userName;
  const phoneNumber = req.body.phoneNumber;
  const userEmail = req.body.userEmail;

  database.query(
    `INSERT INTO user(uUID, userName, phoneNumber, userEmail) VALUES('${uUID}', '${userName}', '${phoneNumber}', '${userEmail}')`, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );

};

exports.getUser = (req, res) => {
  const uUID = req.params.uUID;
  database.query(
    `SELECT * FROM user WHERE uUID = ${uUID}`, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
};

exports.createOrg = (req, res) => {

  const uUID = req.body.uUID;
  const orgName = req.body.orgName;
  const orgEmail = req.body.orgEmail;
  const orgPhone = req.body.orgPhone;
  const orgType = req.body.orgType;
  const orgLocation = req.body.orgLocation;
  // const totalCasesAccepted = req.body.totalCasesAccepted;

  database.query(
    `INSERT INTO org(uUID, orgName, orgEmail, orgPhone, orgType, orgLocation) VALUES('${uUID}', '${orgName}', '${orgEmail}', '${orgPhone}', '${orgType}', '${orgLocation}')`, (err, result) => {
      if(err) {
        console.log(err);
        res.send(err);
      } else{
        console.log(result);
        res.status(200).send(result);
      }
    }
  );
};


exports.getOrg = (req, res) => {
  const uUID = req.params.uUID;

  database.query(
    `SELECT * FROM org WHERE uUID = ${uUID}`, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
};

exports.acceptCase = (req, res) => {
  const caseId = req.body.caseId;
  const orgAssigned = req.body.orgAssigned;

  database.query(
    `UPDATE reports SET caseAccepted = true, orgAssigned = ${orgAssigned} WHERE caseID = ${caseId}` , (err, result) => {
      if(err){
        console.log(err);
        res.send(err);
      } else{
        console.log(result);
        res.status(200).send(result);
      }
    }
  )
};

exports.getServicesNearYou = (req, res) => {

  database.query(
    `SELECT * FROM org`, (err, result) => {
      if(err){
        console.log(err);
        res.send(err);
      } else{
        console.log(result);
        res.status(200).send(result);
      }
    }
  )
};

exports.getMyCases = (req,res) => {
  const uUID = req.params.uUID;

  database.query(
    `SELECT * FROM reports WHERE uUID = ${uUID}`, (err, result) => {
      if(err){
        console.log(err);
        res.send(err);
      }else{
        console.log(result);
        res.status(200).send(result);
      }
    }
  )
};

exports.deleteCaseById = (req, res) => {
  const caseId  = req.body.caseId;

  database.query(
    `DELETE FROM reports WHERE caseId = ${caseId}`, (err, result) => {
      if(err){
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    }
  )
};

exports.editProfile = (req,res) => {
  const uUID = req.body.uUID;
  const userName = req.body.userName;
  const phoneNumber = req.body.phoneNumber;
  const userEmail = req.body.userEmail;


  database.query(
    `UPDATE user SET userName = '${userName}', phoneNumber = ${phoneNumber}, userEmail = '${userEmail}' WHERE uUID = ${uUID}`, (err, result) => {
      if(err){
        console.log(err);
        res.send(err);
      }else{
        console.log(result);
        res.send(result);
      }
    }
  )
};

exports.welcomeMail = (req, res) => {

  const userEmail = req.body.userEmail;

  var mailOptions = {
    from: 'info@yogdaan.tech',
    to: userEmail,
    subject: 'Signed Up Successfully!',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(info);
    } else {
      console.log('Email sent: ' + userEmail);
      res.send(info);
    }
  });
  
};