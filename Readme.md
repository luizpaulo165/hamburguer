## O que é o Hamburger

É um sistema de grid com responsividade dinâmica que usa o flex como base. 
O grid é pensado para que dependendo do tamanho do conteúdo as colunas se adaptem automaticamente de acordo com a resolução.

## Estrutura básica
~~~html
    <div container-flex>
        <div col>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam totam consectetur accusamus, quisquam at est delectus repellat tenetur eius nulla iure aspernatur, quis asperiores error! At rerum velit adipisci. Deleniti!
        </div>
        <div col>
            Col
        </div>
    </div>
~~~

## Atributos

Caso queira mudar o comportamento da coluna de acordo com a resolução, basta adicionar um atributo relacionado a resolução que deseja e o tamanho da coluna. Exemplo:

````
    <div col xl="6" lg="6" md="12" sm="12" xs="12">
        Col com atributos para resoluções
    </div>
````

#### Resoluções e atributos 

Atributo  | Dispositivo
--------- | ------
xl        | Desktop - Resolução acima de 1920px
lg        | Desktop - Resolução baixo de 1920px
md        | Tablets ou Notebooks de resolução baixa
sm        | Mobile na visão horizontal
xs        | Mobile