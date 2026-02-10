# Portfólio QA (V2) — Manual + Automação (UI/API)

Este repositório é um portfólio **híbrido**: artefatos de **QA manual** (cenários, casos, checklist, bug report) + exemplos de **automação** (UI com Cypress e API com Postman/Newman).

## Site (Vercel)
Projeto estático (HTML/CSS/JS). Basta publicar em Vercel/Netlify ou abrir o `index.html`.

---

## Estrutura

- `index.html` + `assets/` → site do portfólio
- `files/` → currículo (PDF)
- `automation/`
  - `ui-cypress/` → template + demo para automação de UI
  - `api-postman/` → coleção Postman de exemplo (JSONPlaceholder)

---

## Automação UI — Cypress (exemplo)

A pasta `automation/ui-cypress` contém:
- `demo-app/index.html` → página demo com regra de habilitar/desabilitar botão usando classe `blue-btn-disabled`
- `tests/` → specs validando **estado + bloqueio real** do botão

### Como rodar

```bash
cd automation/ui-cypress
npm i
npx playwright install
npx http-server . -p 4173
npm test
```

> O `baseURL` padrão é `http://127.0.0.1:4173`.  
> Você pode mudar via `BASE_URL`:
> `BASE_URL=http://127.0.0.1:4173 npm test`

---

## Automação API — Postman/Newman (exemplo)

Coleção: `automation/api-postman/collection.json`

### Rodar com Newman

```bash
npm i -g newman
newman run automation/api-postman/collection.json
```

---

## O que este portfólio demonstra

- Conversão de requisito → cenários e casos de teste (Ação/Resultado Esperado)
- Validação caixa-cinza (ex.: alterações de classe `blue-btn-disabled`)
- Regressão: estado visual + proteção de ação (clique/evento)
- UI Automation (Cypress) + API Testing (Postman/Newman)
