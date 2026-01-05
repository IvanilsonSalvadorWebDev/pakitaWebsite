import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import ReactGA from "react-ga4";

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const FORMSPREE_ID = "mdakjwye"; 

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // ENVIA O EVENTO PARA O GOOGLE ANALYTICS
      ReactGA.event({
        category: "Conversão",
        action: "Envio de Formulário",
        label: "Lead de Contato",
      });
        toast.success("Lead capturado! Entraremos em contato.", {
          duration: 5000,
          style: {
            background: "#0f172a",
            color: "#58b44c",
            border: "1px solid #58b44c",
            fontFamily: "Inter, sans-serif",
          },
        });
        reset(); 
      } else {
        throw new Error("Erro no servidor");
      }
    } catch (error) {
      toast.error("Ops! Algo deu errado. Tente novamente.", {
        style: {
          background: "#0f172a",
          color: "#ff4d4d",
          border: "1px solid #ff4d4d",
        },
      });
    }
  };

  return (
    <footer id="contact" className="footer reveal">
      <Toaster position="bottom-right" />

      <div className="container">
        <div className="section-header" style={{ textAlign: "left", marginBottom: "3rem" }}>
          <h2 style={{ color: "white", fontSize: "3rem" }}>Vamos Conversar?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginLeft: "0" }}>
            Sua presença digital começa aqui.
          </p>
        </div>

        <div className="footer-grid">
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              📍 Luanda, Angola<br />📞 +244 945 435 733<br />📧 ola@planoperfeito.com
            </p>
            <div className="logo" style={{ fontSize: "2rem" }}>Pakita</div>
          </div>

          <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            {/* Proteção Anti-Bot Honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            {/* NOME */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input 
                type="text" 
                placeholder="Seu Nome" 
                {...register("name", { required: "Nome é obrigatório" })}
                style={{ borderColor: errors.name ? "#ff4d4d" : "" }}
              />
              {errors.name && <span style={{ color: "#ff4d4d", fontSize: "0.75rem", marginTop: "5px" }}>{errors.name.message}</span>}
            </div>

            {/* EMAIL */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input 
                type="email" 
                placeholder="E-mail Corporativo" 
                {...register("email", { 
                  required: "E-mail é obrigatório",
                  pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" }
                })}
                style={{ borderColor: errors.email ? "#ff4d4d" : "" }}
              />
              {errors.email && <span style={{ color: "#ff4d4d", fontSize: "0.75rem", marginTop: "5px" }}>{errors.email.message}</span>}
            </div>

            {/* TELEFONE */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input 
                type="tel" 
                placeholder="Telefone (ex: +244...)" 
                {...register("phone", { 
                  required: "O telefone é obrigatório",
                  pattern: {
                    value: /^[0-9+ ]{9,15}$/,
                    message: "Número de telefone inválido"
                  }
                })}
                style={{ borderColor: errors.phone ? "#ff4d4d" : "" }}
              />
              {errors.phone && (
                <span style={{ color: "#ff4d4d", fontSize: "0.75rem", marginTop: "5px" }}>
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* MENSAGEM */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <textarea 
                rows="4" 
                placeholder="Descreva seu projeto..." 
                {...register("message", { required: "A descrição é necessária" })}
                style={{ borderColor: errors.message ? "#ff4d4d" : "" }}
              ></textarea>
              {errors.message && <span style={{ color: "#ff4d4d", fontSize: "0.75rem", marginTop: "5px" }}>{errors.message.message}</span>}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}