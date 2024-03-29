function status(request, response) {
  response.status(200).json({ value: "testing the status endpoint" });
}

export default status;
