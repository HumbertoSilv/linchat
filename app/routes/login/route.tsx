import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "@remix-run/react";
import Input from "../../components/UI/Input";

export default function Login() {
  const navigate = useNavigate();

  const successLogin = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    // chama API enviando o token
    // if success -> redirect /chat
    return navigate("/chat")

    // if error -> Throw error
  }

  const errorLogin = () => {
    console.log('Login Failed')
  }

  return (
    <div
      className="bg-local grid h-screen items-center sm:grid-cols-2 p-8 text-text"
      style={{ backgroundImage: "repeating-linear-gradient(45deg, black, transparent 100px)" }}
    >
      <form className="flex flex-col max-w-[485px] m-auto">
        <h1 className="text-6xl font-medium py-8 text-title">
          Faça seu login
          <span className="text-primary">.</span>
        </h1>

        <Input
          id="user"
          label="E-mail/username"
          placeholder="Seu e-mail ou usuário..."
          required
        />

        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Sua senha..."
          required
        />

        <span
          className="self-end"
        >
          <Link to="/recover-password">
            <u>Esqueci minha senha</u>
          </Link>
        </span>
        <button
          type="submit"
          className="bg-primary p-4 mt-9 rounded-2xl text-lg font-semibold hover:bg-secondary transition"
        >
          Entrar
        </button>

        <div
          className="flex justify-center self-center mt-6"
          style={{ colorScheme: "light" }}
        >
          <GoogleLogin
            auto_select
            theme="filled_black"
            onSuccess={credentialResponse => {
              successLogin(credentialResponse)
            }}
            onError={errorLogin}
          />
        </div>
        <span
          className="self-center my-5"
        >
          <Link to="/sign-up">Ainda não tem uma conta?</Link>
        </span>
      </form>
    </div>
  )
}
