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

exports.getCases = (req, res, next) => {
  database
    .query(`SELECT * FROM reports`)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createCases = (req, res, next) => {
  const uUID = req.body.uUID;
  const victimName = req.body.victimName;
  const vTime = req.body.vTime;
  const cType = req.body.cType;
  const severity = req.body.severity;
  const vLocation = req.body.vLocation;
  const inform = req.body.inform;

  database
    .query(
      `INSERT INTO reports(uUID, victimName, vTime, cType, severity, vLocation, inform) VALUES('${uUID}','${victimName}', '${vTime}','${cType}', '${severity}', '${vLocation}','${inform}')`
    )
    .then((result) => {
        res.send({"message" :"DataUpdated" , status: "200"});
    })
    .catch((err) => {
        console.log(err);
    });
};
