# 🛒 Marketplace Lab (Laboratório de Alta Concorrência e Confiabilidade)

Laboratório de engenharia de backend focado em entender os gargalos reais de um e-commerce/marketplace (estilo Shopee/Shein), lidando com concorrência, estoque limitado, transações e testes de carga.

## 🎯 Objetivo
Simular cenários de alta demanda (Flash Sales) para observar na unha onde o banco de dados e a aplicação estouram, aplicando soluções arquiteturais pragmáticas (Locks, Transações ACID, Cache e Mensageria).

---

## 📋 Regras de Negócio do Laboratório
1. **Vendedores** podem cadastrar produtos informando preço e estoque inicial.
2. **Clientes** podem listar produtos e realizar compras (pedidos).
3. **Restrição Crítica:** O estoque de um produto **nunca** pode ficar negativo, mesmo sob concorrência extrema de milhares de requisições simultâneas.

---

## 🛠️ Stack Tecnológica
* **Node.js** com TypeScript (ES Modules)
* **Express** (API HTTP)
* **PostgreSQL** (Banco Relacional)
* **Redis** (Cache / Fila de Mensagens)
* **Docker & Docker Compose** (Infraestrutura local)
* **k6 / Autocannon** (Testes de carga)

---

## 🚀 Como Rodar o Ambiente Local

1. Subir os serviços de infraestrutura (PostgreSQL e Redis):
```bash
docker compose up -d
```

2. Instalar as dependências:

```Bash
npm install
```

3.Iniciar o servidor em modo de desenvolvimento:

```Bash
npm run dev
```
## 🔬 Diário de Experimentos & Testes de Carga
### Este espaço será atualizado conforme formos quebrando o sistema e aplicando as correções.
