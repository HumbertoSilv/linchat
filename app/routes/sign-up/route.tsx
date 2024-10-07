import { Link } from "@remix-run/react";
import Input from "../../components/UI/Input";

export default function SignUp() {
  return (
    <div className="grid h-screen items-center sm:grid-cols-2 p-8 text-text">
      <div />
      <form className="flex flex-col max-w-[485px]">
        <h1 className="text-6xl font-medium py-8 text-title">
          Crie uma conta
        </h1>

        <Input
          id="name"
          type="text"
          label="Nome"
          placeholder="Seu nome..."
          required
        />

        <Input
          id="user"
          type="text"
          label="E-mail/username"
          placeholder="Seu e-mail ou usuário..."
          required
        />

        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Crie uma senha..."
          required
        />

        <Input
          id="check-password"
          type="password"
          label="Confirmar senha"
          placeholder="Confirme sua senha..."
          required
        />

        <button
          type="submit"
          className="bg-primary p-5 my-9 rounded-2xl text-lg font-semibold hover:bg-secondary transition"
        >
          Criar conta
        </button>

        <span
          className="self-center mb-5"
        >
          <Link to="/login">Já tem uma conta? entrar</Link>
        </span>
      </form>
    </div>
  )
}

