import { Link } from "@remix-run/react";
import Input from "../../components/UI/Input";

export default function Login() {
  return (
    <div className="grid h-screen items-center sm:grid-cols-2 p-8 text-text">
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
          className="bg-primary p-5 my-9 rounded-2xl text-lg font-semibold hover:bg-secondary transition"
        >
          Entrar
        </button>

        <span
          className="self-center mb-5"
        >
          <Link to="/sign-up">Ainda não tem uma conta?</Link>
        </span>
      </form>
    </div>
  )
}
