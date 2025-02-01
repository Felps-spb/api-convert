*API SIMPLES DE CONVERSAO DE MOEDAS*

Testar a API
Você pode testar a API de conversão de moedas usando ferramentas como o Postman, Insomnia, ou até mesmo o seu navegador ou curl no terminal.

Usando o Navegador
Se você estiver usando o método GET, pode simplesmente abrir o navegador e acessar a URL com os parâmetros necessários. Por exemplo:

*** http://localhost:3000/convert?base=USD&target=EUR&amount=100 ***
Isso deve retornar uma resposta JSON com o valor convertido.

Usando o Postman ou Insomnia:
1- Abra o Postman ou Insomnia.
2- Crie uma nova requisição GET.
3- Insira a URL da API, por exemplo: http://localhost:3000/convert.
4- Adicione os parâmetros de consulta (query parameters):
. base: a moeda de origem (por exemplo, USD).
. target: a moeda de destino (por exemplo, EUR).
. amount: o valor a ser convertido (por exemplo, 100).
5- Envie a requisição e verifique a resposta.
