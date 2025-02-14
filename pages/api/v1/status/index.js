function status(request, response) {
  response.status(200).json({ chave: "Projeto massa" });
}

export default status;
