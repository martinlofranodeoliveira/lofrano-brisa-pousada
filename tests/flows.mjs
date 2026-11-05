const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "brisa-01 — apresenta a Suíte Horizonte",
    run: async ({ ui, user, assert }) => {
      const suite = ui.getByRole("button", { name: /Suíte Horizonte/u });
      await user.click(suite);
      assert.equal(suite.getAttribute("aria-pressed"), "true");
      assert.ok(
        ui.getByRole("heading", {
          level: 3,
          name: "Suíte Horizonte",
          exact: true,
        }),
      );
      assert.ok(ui.getByText("46 m² · até 2 pessoas", { exact: true }));
      assert.ok(
        ui.getByText(
          "Uma janela aberta para o azul. Mais espaço para desacelerar.",
          { exact: true },
        ),
      );
    },
  },
  {
    name: "brisa-02 — limita a estadia entre uma e sete noites",
    run: async ({ ui, user, assert }) => {
      const decrease = ui.getByRole("button", {
        name: "Diminuir noites",
        exact: true,
      });
      const increase = ui.getByRole("button", {
        name: "Aumentar noites",
        exact: true,
      });
      const nights = ui.getByLabelText("Número de noites", { exact: true });
      await user.click(decrease);
      assert.equal(text(nights), "1");
      assert.equal(decrease.disabled, true);
      await user.click(decrease);
      assert.equal(text(nights), "1");
      for (let count = 0; count < 6; count += 1) await user.click(increase);
      assert.equal(text(nights), "7");
      assert.equal(increase.disabled, true);
      assert.equal(decrease.disabled, false);
      await user.click(increase);
      assert.equal(text(nights), "7");
    },
  },
  {
    name: "brisa-03 — simula três noites e limpa o valor ao alterar escolhas",
    run: async ({ ui, user, assert }) => {
      const feedback = ui.getByText(
        "Valores fictícios para experimentar a jornada de reserva.",
        { exact: true },
      );
      await user.click(ui.getByRole("button", { name: /Suíte Horizonte/u }));
      await user.click(
        ui.getByRole("button", { name: "Aumentar noites", exact: true }),
      );
      assert.equal(
        text(ui.getByLabelText("Número de noites", { exact: true })),
        "3",
      );
      await user.click(ui.getByRole("button", { name: "Visualizar estadia" }));
      assert.equal(
        text(feedback),
        "3 noites · R$ 2.760 no exemplo. Simulação sem reserva ou cobrança.",
      );
      await user.click(ui.getByRole("button", { name: /Casa da Brisa/u }));
      assert.equal(
        text(feedback),
        "Valores fictícios para experimentar a jornada de reserva.",
      );
      await user.click(ui.getByRole("button", { name: "Visualizar estadia" }));
      await user.click(
        ui.getByRole("button", { name: "Diminuir noites", exact: true }),
      );
      assert.equal(
        text(feedback),
        "Valores fictícios para experimentar a jornada de reserva.",
      );
    },
  },
];
