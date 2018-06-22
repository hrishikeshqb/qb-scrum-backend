const ProjectSchema = require('../models/projects');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/response');

/**
 * Gets the projects list of corresponding user
 * userId will be given as query parameter
 */
const  getUsersProjects = (req, res) => {
  const { userId } = req.query;
  ProjectSchema.find({"members.id": userId})
    .then(projects => {
      sendSuccessResponse(res, projects);
    })
    .catch(error => sendFailureResponse(res, error))
};

module.exports = getUsersProjects;
