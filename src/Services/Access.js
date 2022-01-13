import axios from "axios";
import { BASE_URL } from "../Constants/URL";
import { goToHome, goToProfile, goToSignAddress, goToSignUp } from "../Routes/Coordinator";

export const Login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      if(res.data.user.hasAddress === false) {
        goToSignAddress(history);
      }else{
        goToHome(history);
      } 
    })
    .catch((err) => {
      alert(err.response.data.message);
      if (err.response.data.message === "Usuário não encontrado") {
        goToSignUp(history);
      }
    });
};

export const SignUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Cadastro Realizado com sucesso!");
      clear();
      goToSignAddress(history);
    })
    .catch((err) => {
      console.log(err);
      alert(
        "Possiveis erros: senha com menos de 8 caracteres, e-mail já criado, senha igual a de outro usuário!"
      );
    });
};

export const SignAddress = (body, clear, history) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Endereço cadastrado com sucesso!");
      clear();
      goToHome(history);
    })
    .catch((err) => {
      console.log(err.response.data.message);
      alert("Ocorreu um erro! tente novamente!");
    });
};

export const EditProfile = (body, history) => {
  axios
  .put(`${BASE_URL}/profile`, body, {
    headers: {
      auth: localStorage.getItem("token"),
    },
  })
  .then((res) => {
    console.log(res.data.user)
    alert("Perfil atualizado com sucesso!");
    goToProfile(history);
  })
  .catch((err) => {
    console.log(err.message);
  });
}

export const EditAddress = (body, history) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Endereço atualizado com sucesso!");
      goToProfile(history);
    })
    .catch((err) => {
      console.log(err.message);
      alert("Ocorreu um erro! tente novamente!");
    });
};
