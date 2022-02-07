// const Response = require('../utils/response');
const database = require("../utils/database");

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

  database
    .query(
      `INSERT INTO reports(uUID, caseId, victimName, vTime, cType, cImage, severity, vLocation, inform) VALUES('${uUID}', '${caseId}' ,'${victimName}', '${vTime}', '${cType}', '${cImage}','${severity}', '${vLocation}','${inform}')`, (err,result) => {
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