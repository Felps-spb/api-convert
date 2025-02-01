# API Simples de Conversão de Moedas
Uma API fácil de usar para converter valores entre diferentes moedas.

Como Testar a API
Você pode testar a funcionalidade da API usando ferramentas como Postman, Insomnia, seu navegador ou o terminal com curl.

Usando o Navegador
Para realizar uma conversão por meio do navegador, utilize o método GET e acesse a URL com os parâmetros apropriados. Exemplo:

```http://localhost:3000/convert?base=USD&target=EUR&amount=100```
A resposta será um JSON com o valor convertido.

JSON
```
{
    "base_currency": "USD",
    "target_currency": "EUR",
    "amount": "100",
    "converted_amount": 96.3
}
```

Usando o Postman ou Insomnia
Siga as etapas abaixo para usar o Postman ou Insomnia:

> Inicie o Postman ou Insomnia.
- Crie uma nova requisição GET.
- Insira a URL da API:
```http://localhost:3000/convert```
> Adicione os parâmetros de consulta (query parameters):
- base: Moeda de origem (e.g., USD).
- target: Moeda de destino (e.g., EUR).
- amount: Valor a ser convertido (e.g., 100).
Envie a requisição e verifique a resposta.

Exemplo de Resposta
A API retorna um JSON com o valor convertido. Veja o exemplo:

JSON
```
{
    "base_currency": "USD",
    "target_currency": "EUR",
    "amount": "100",
    "converted_amount": 96.3
}
```
Notas
Servidor: Assegure-se de que a API está rodando no endereço e porta corretos.
Códigos de Moeda: Verifique a validade dos códigos de moeda e se são suportados pela API.
## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.


