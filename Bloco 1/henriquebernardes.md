# Onboarding SACI 2026.2 - DevSecOps

## Dados do Candidato
* **Nome:** [Henrique Bernardes Campos]
* **Curso:** [Ciência da Computação]
* **Trilha:** DevSecOps

---

## Desafio Técnico Inicial

### Pergunta:
Trilha: 
Pergunta Rápida: Escreva uma breve explicação (COM SUAS PALAVRAS) sobre o que são SAST, DAST, SCA e como cada um deles ajuda no desenvolvimento seguro.

### Resposta:
SAST (Static Application Security Testing):
O SAST consiste na análise estática do código fonte sem executá-lo, examinando padrões e construções que podem comprometer o sistema (vulnerabilidades). Uma de suas principais aplicações é rodar uma verificação automatizada do código sempre que for aberto um pull request no ambiente de CI, permitindo encontrar vulnerabilidades logo no início do desenvolvimento do programa.

DAST (Dynamic Application Security Testing):
O DAST consiste na análise da aplicação do código em tempo de execução, simulando ataques reais contra o sistema durante seu funcionamento. Pode-se dizer que o DAST atua como um complemento essencial ao SAST, já que existem vulnerabilidades que só são possíveis de serem identificadas durante a execução do código, como por exemplo, vulnerabilidades de banco de dados (SQL Injection), problemas de política de compartilhamento de recursos (CORS), entre outros.

SCA (Software Composition Analysis):
O SCA é responsável por analisar as dependências externas do projeto, como bibliotecas, pacotes e frameworks utilizados no software. A ferramenta identifica essas dependências, verifica se há vulnerabilidades conhecidas nelas e recomenda atualizações para outras versões mais seguras e confiáveis, como por exemplo, o caso das bibliotecas.