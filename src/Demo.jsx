import React from "react";
import { ArrowUpRight, ArrowRight, Waves, Minus, Plus } from "./Icons.jsx";
import image_brisa from "../assets/brisa.webp";
function ModelImage({ alt }) {
  return <img src={image_brisa} alt={alt} width={1400} height={1000} />;
}

const DemoNote = ({ prefix: e }) => (
  <p className={`${e}-note`}>
    Experiência demonstrativa · marca, serviços e valores ilustrativos. Suas
    escolhas ficam apenas nesta tela.
  </p>
);
const DemoData1 = [
  {
    name: `Suíte Jardim`,
    desc: `Texturas naturais, luz suave e uma varanda voltada para o verde.`,
    size: `32 m² · até 2 pessoas`,
    price: 680,
  },
  {
    name: `Suíte Horizonte`,
    desc: `Uma janela aberta para o azul. Mais espaço para desacelerar.`,
    size: `46 m² · até 2 pessoas`,
    price: 920,
  },
  {
    name: `Casa da Brisa`,
    desc: `Dias compartilhados, sala de estar e espaço para ficar mais um pouco.`,
    size: `78 m² · até 4 pessoas`,
    price: 1480,
  },
];
function BrisaDemo() {
  let [selectedSuiteIndex, setSelectedSuiteIndex] = React.useState(0),
    [nights, setNights] = React.useState(2),
    [availabilitySimulated, setAvailabilitySimulated] = React.useState(!1);
  return (
    <div className={`br-page`} id={`demo-top`}>
      <div className={`br-nav`}>
        <a href={`#br-stay`}>A estadia</a>
        <a href={`#demo-top`} className={`br-logo`}>
          brisa<span>CASA & MAR</span>
        </a>
        <a href={`#br-stay`}>
          {`Imagine seus dias `}
          <ArrowUpRight size={15} />
        </a>
      </div>
      <section className={`br-hero`}>
        <ModelImage
          slug={`brisa`}
          alt={`Refúgio costeiro sereno com arquitetura natural e vista para o mar`}
        />
        <div>
          <p>UM REFÚGIO. OUTRO TEMPO.</p>
          <h1>
            Deixe o mundo
            <br />
            <em>esperar um pouco.</em>
          </h1>
          <a href={`#br-stay`}>
            {`Encontre seu lugar `}
            <ArrowRight size={17} />
          </a>
        </div>
        <span className={`br-hero-caption`}>
          HOTELARIA · CONCEITO DEMONSTRATIVO
        </span>
      </section>
      <section className={`br-intro`}>
        <Waves size={35} strokeWidth={1} />
        <p>
          Entre o azul do mar e o verde do jardim, a beleza está em fazer menos.
          Acordar sem pressa. Abrir a janela. Simplesmente estar.
        </p>
        <span>O LUXO DE UM DIA LEVE.</span>
      </section>
      <section className={`br-stay`} id={`br-stay`}>
        <div className={`br-stay-heading`}>
          <p>01 / SEU CANTO</p>
          <h2>
            Espaço para
            <br />
            <em>ficar bem.</em>
          </h2>
          <p>
            Acomodações de exemplo, pensadas para diferentes formas de viver a
            pausa.
          </p>
          <div className={`br-room-tabs`}>
            {DemoData1.map((n, r) => (
              <button
                key={n.name}
                aria-pressed={selectedSuiteIndex === r}
                onClick={() => {
                  (setSelectedSuiteIndex(r), setAvailabilitySimulated(!1));
                }}
              >
                <span>0{r + 1}</span>
                {n.name}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
        </div>
        <article className={`br-room`}>
          <span className={`br-room-icon`}>
            <Waves size={56} strokeWidth={0.7} />
          </span>
          <p>ACOMODAÇÃO ILUSTRATIVA</p>
          <h3>{DemoData1[selectedSuiteIndex].name}</h3>
          <span>{DemoData1[selectedSuiteIndex].size}</span>
          <p>{DemoData1[selectedSuiteIndex].desc}</p>
          <div className={`br-nights`}>
            <span>Noites</span>
            <button
              aria-label={`Diminuir noites`}
              disabled={nights === 1}
              onClick={() => {
                (setNights(nights - 1), setAvailabilitySimulated(!1));
              }}
            >
              <Minus size={15} />
            </button>
            <output aria-label={`Número de noites`}>{nights}</output>
            <button
              aria-label={`Aumentar noites`}
              disabled={nights === 7}
              onClick={() => {
                (setNights(nights + 1), setAvailabilitySimulated(!1));
              }}
            >
              <Plus size={15} />
            </button>
          </div>
          <button
            className={`br-action`}
            onClick={() => setAvailabilitySimulated(!0)}
          >
            {`Visualizar estadia `}
            <ArrowRight size={17} />
          </button>
          <div className={`br-feedback`} role={`status`}>
            {availabilitySimulated
              ? `${nights} noites · R$ ${(DemoData1[selectedSuiteIndex].price * nights).toLocaleString(`pt-BR`)} no exemplo. Simulação sem reserva ou cobrança.`
              : `Valores fictícios para experimentar a jornada de reserva.`}
          </div>
        </article>
      </section>
      <section className={`br-moments`}>
        <p>02 / PEQUENOS RITUAIS</p>
        <div>
          {[
            [
              `Manhã de sol`,
              `Café demorado. A primeira luz. Um dia inteiro pela frente.`,
            ],
            [
              `Sal na pele`,
              `Caminhos até a areia e tempo para acompanhar a maré.`,
            ],
            [
              `Noite tranquila`,
              `Sabores locais, conversa boa e o som de um dia que termina.`,
            ],
          ].map(([e, t], n) => (
            <article key={e}>
              <span>0{n + 1}</span>
              <h3>{e}</h3>
              <p>{t}</p>
            </article>
          ))}
        </div>
      </section>
      <DemoNote prefix={`br`} />
    </div>
  );
}

export default BrisaDemo;
