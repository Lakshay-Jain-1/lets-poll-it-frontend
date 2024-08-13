import axios from "axios";

const LoginUSER = async (name, password) => {
  try {
    let data = await axios.post(
      import.meta.env.VITE_Login,
      { name, password },
      { withCredentials: true }
    );
  } catch (err) {
    console.log(err);
  }
};

const SignUpUser = async (name, password) => {
  try {
    let data = await axios.post(
      import.meta.env.VITE_SignUp,
      { name, password },
      { withCredentials: true }
    );
  } catch (err) {
    console.log(err);
  }
};
export { LoginUSER, SignUpUser };
