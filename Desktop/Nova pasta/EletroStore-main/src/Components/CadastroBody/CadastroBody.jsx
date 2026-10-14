import InputFormCadastro from "../InputFormCadastro/InputFormCadastro";
import "./CadastroBody.css";

function CadastroBody() {
  return (
    <section id="body-cadastro">
      <div id="form-cadastro">
        {/* Cabeçalho */}
        <div className="cabecalho-cadastro">
          <h1>Crie sua conta</h1>
          <p>
            Preencha seus dados e aproveite as melhores ofertas em eletrônicos
          </p>
        </div>

        {/* SEÇÃO 1: DADOS PESSOAIS */}
        <div className="divisor">
          <h2>DADOS PESSOAIS</h2>
          <hr />
        </div>

        <div className="linha-inputs col-1">
          <div className="input-box">
            <InputFormCadastro
              label="Nome completo"
              placeholder="Digite seu nome completo"
              type="text"
            />
          </div>
        </div>

        <div className="linha-inputs col-3">
          <div className="input-box">
            <InputFormCadastro
              label="CPF"
              placeholder="000.000.000-00"
              type="text"
            />
          </div>
          <div className="input-box">
            <InputFormCadastro
              label="Data de nascimento"
              placeholder="dd/mm/aaaa"
              type="text"
            />
          </div>
          <div className="input-box">
            <InputFormCadastro
              label="Telefone / WhatsApp"
              placeholder="(85) 90000-0000"
              type="text"
            />
          </div>
        </div>

        {/* SEÇÃO 2: ENDEREÇO */}
        <div className="divisor">
          <h2>ENDEREÇO</h2>
          <hr />
        </div>

        <div className="linha-inputs col-3">
          <div className="input-box">
            <InputFormCadastro
              label="CEP"
              placeholder="00000-000"
              type="text"
            />
          </div>
          <div className="input-box">
            <InputFormCadastro
              label="Cidade"
              placeholder="Sua cidade"
              type="text"
            />
          </div>
          <div className="input-box">
            <InputFormCadastro
              label="Estado"
              placeholder="Selecione"
              type="text"
            />
          </div>
        </div>

        {/* SEÇÃO 3: DADOS DE ACESSO */}
        <div className="divisor">
          <h2>DADOS DE ACESSO</h2>
          <hr />
        </div>

        <div className="linha-inputs col-2">
          <div className="input-box">
            <InputFormCadastro
              label="E-mail"
              placeholder="seuemail@exemplo.com"
              type="email"
            />
          </div>
          <div className="input-box">
            <InputFormCadastro
              label="Usuário"
              placeholder="Escolha um usuário"
              type="text"
            />
          </div>
        </div>

        <div className="linha-inputs col-2">
          <div className="input-box">
            <InputFormCadastro
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              type="password"
            />
            {/* Barra de força da senha */}
            <div className="forca-senha-container">
              <div className="barras-forca">
                <span className="barra ativa"></span>
                <span className="barra ativa"></span>
                <span className="barra ativa"></span>
                <span className="barra"></span>
              </div>
              <small>Força da senha: boa</small>
            </div>
          </div>

          <div className="input-box">
            <InputFormCadastro
              label="Confirmar senha"
              placeholder="Repita sua senha"
              type="password"
            />
          </div>
        </div>

        {/* CHECKBOXES */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" defaultChecked />
            <span>
              Li e aceito os <a href="#termos">Termos de uso</a> e a{" "}
              <a href="#privacidade">Política de privacidade</a>
            </span>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" />
            <span>Quero receber ofertas e novidades por e-mail</span>
          </label>
        </div>

        {/* BOTÃO PRINCIPAL */}
        <button type="submit" className="btn-criar-conta">
          Criar minha conta
        </button>

        {/* DIVISOR LOGIN SOCIAL */}
        <div className="divisor-social">
          <hr />
          <span>Ou cadastre-se com</span>
          <hr />
        </div>

        {/* BOTÕES SOCIAIS */}
        <div className="botoes-sociais">
          <button type="button" className="btn-social">
            <span className="icone-google">G</span> Google
          </button>
          <button type="button" className="btn-social">
            <span className="icone-linkedin">in</span> LinkedIn
          </button>
        </div>

        {/* RODAPÉ DO FORMULÁRIO */}
        <p className="link-login">
          Já tem uma conta? <a href="#login">Entre aqui</a>
        </p>
      </div>
    </section>
  );
}

export default CadastroBody;
