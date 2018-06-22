const express = require('express');
const router = express.Router();
const getUsersProjects = require('../controllers/projects');
const endpoints = require('../endpoints');

const statusURI = '/status';

router.get(statusURI, (req, res) => {
  res.status(200).send({'status': 'OK'});
});

router.get(endpoints.projects, getUsersProjects);

module.exports = router;
