export class userInputDTO{
    name = "";
    username = "";
    phone = "";
    password = "";
    avatar = "";

// metodo object destructuring
constructor({nome, username, telefone, senha, avatar}){
this.name = nome;
this.username = username;
this.phone = telefone;
this.password = senha;
this.avatar = avatar;
}
}