API Simples de Conversão de Moedas
Esta API permite converter valores entre diferentes moedas de forma simples e rápida.

Como Testar a API
Você pode testar a API de conversão de moedas utilizando ferramentas como Postman, Insomnia, seu navegador ou o terminal com o comando curl.

Usando o Navegador
Para realizar uma conversão usando o método GET, basta abrir o navegador e acessar a URL com os parâmetros necessários. Por exemplo:


http://localhost:3000/convert?base=USD&target=EUR&amount=100

Isso retornará uma resposta JSON com o valor convertido.

Usando o Postman ou Insomnia
Siga os passos abaixo para testar a API:

Abra o Postman ou Insomnia.
Crie uma nova requisição GET.
Insira a URL da API:
http://localhost:3000/convert
Adicione os parâmetros de consulta (query parameters):
base: a moeda de origem (por exemplo, USD).
target: a moeda de destino (por exemplo, EUR).
amount: o valor a ser convertido (por exemplo, 100).
Envie a requisição e verifique a resposta.
Usando o Terminal com Curl
Você também pode usar o curl para testar a API diretamente do terminal:

BASH

curl "http://localhost:3000/convert?base=USD&target=EUR&amount=100"
Exemplo de Resposta
A resposta será um JSON contendo o valor convertido, como no exemplo abaixo:

JSON

{
  "base": "USD",
  "target": "EUR",
  "amount": 100,
  "convertedAmount": 85.50
}

Observações
Certifique-se de que o servidor da API está em execução no endereço e porta corretos.
Verifique se os códigos das moedas estão corretos e são suportados pela API.
