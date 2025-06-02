# Guia de Contribuição

Obrigado por querer contribuir com o CSS Solar System 2025! Siga estas orientações para garantir qualidade, acessibilidade e colaboração saudável.

## Como contribuir

1. **Fork** este repositório.
2. Crie uma branch descritiva: `git checkout -b minha-feature`.
3. Faça commits claros e atômicos (`git commit -m 'feat: descrição curta'`).
4. Garanta que o código siga o padrão do projeto (CSS modular, sem JS).
5. Execute os testes de acessibilidade e lint localmente antes de abrir PR.
6. Abra um Pull Request detalhado, explicando o que mudou e por quê.
7. Aguarde revisão e responda feedbacks de forma construtiva.

## Boas práticas

- **CSS Only**: Não use JS. Use apenas HTML e CSS.
- **Acessibilidade**: Siga WCAG 2.1 AA. Teste navegação por teclado, contraste, foco visível e modo daltônico.
- **Clean Code**: Use nomes semânticos, comentários sucintos e evite duplicidade.
- **Commits**: Use Conventional Commits (`feat:`, `fix:`, `docs:`, etc).
- **Branches**: Use nomes descritivos e curtos.
- **CI**: O PR será validado por stylelint, htmlhint e pa11y.
- **Discussões**: Use a aba Discussions para dúvidas e sugestões.

## Testes Locais

- Rode `stylelint` para checar CSS.
- Rode `htmlhint` para validar HTML.
- Use [pa11y](https://pa11y.org/) para testar acessibilidade.

## Respeito e Inclusão

- Seja cordial, inclusivo e respeite todas as pessoas.
- Não serão tolerados comportamentos abusivos, preconceituosos ou discriminatórios.
- Siga o [Código de Conduta](CODE_OF_CONDUCT.md).

## Recursos úteis

- [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/)
- [Stylelint](https://stylelint.io/)
- [HTMLHint](https://htmlhint.com/)
- [Pa11y](https://pa11y.org/)

---

Dúvidas? Abra uma Discussion ou Issue! 