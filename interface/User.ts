interface IUser {
  id: number;
  name: string;
  email: string;
  location?: {
    address: string;
    number: number;
    street: string;
  };
}

function showUserDate(user: IUser): string {
  if (user.location != null)
    return `O usuário: ${user.name}, mora no bairro: ${user.location.address}, rua ${user.location.street}, n° ${user.location.number}`;
  return `O usuário: ${user.name} não possui endereço definido!`;
}

const user: IUser = {
  id: 1,
  name: "Igor",
  email: "root@root.com",
//   location: {
//     address: "Várzea",
//     number: 900,
//     street: "Isaac Buril",
//   },
};


console.log(showUserDate(user));