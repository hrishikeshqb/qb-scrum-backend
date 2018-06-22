function sendSuccessResponse(respose, result) {
  respose.status(200).send({
    status: "ok",
    result
  });
}

function sendFailureResponse(respose, error) {
  respose.status(400).send({
    status: "nok",
    error
  });
}

module.exports = { sendSuccessResponse, sendFailureResponse };
