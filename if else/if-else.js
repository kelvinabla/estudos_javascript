let user = "COMUM";
user = user.toLowerCase();

switch (user) {
  case "comum":
    console.log(`Você é um usuário ${user}`);
    break;
  case "gerente":
    console.log(`Você é um usuario  ${user}`);
    break;
  case "diretor":
    console.log(`Você é um usuario ${user}`);
    break;
  default:
    console.log("Nenhum usuário criado");
}
