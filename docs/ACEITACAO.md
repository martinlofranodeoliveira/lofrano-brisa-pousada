# Critérios do modelo Brisa

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **brisa-01** — Em #br-stay, clicar no button que contém Suíte Horizonte.
  Resultado: O button fica aria-pressed=true, o h3 passa a Suíte Horizonte, a dimensão a 46 m² · até 2 pessoas e a descrição a “Uma janela aberta para o azul. Mais espaço para desacelerar.”.
- **brisa-02** — Usar button[aria-label="Diminuir noites"] até o output[aria-label="Número de noites"] chegar a 1; depois usar “Aumentar noites” até 7.
  Resultado: O número fica limitado de 1 a 7. Diminuir fica disabled em 1 e Aumentar fica disabled em 7.
- **brisa-03** — Escolher Suíte Horizonte, ajustar para 3 noites e clicar “Visualizar estadia”; depois alterar a acomodação ou as noites.
  Resultado: O status mostra “3 noites · R$ 2.760 no exemplo. Simulação sem reserva ou cobrança.”. Alterar acomodação ou noites limpa o resultado e volta a “Valores fictícios para experimentar a jornada de reserva.”.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
