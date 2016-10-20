# Conversor de css para style inline

Converte css em classes para css inline.

## Converte isso:

```
<style>
.titulo {
    color: red;
}
</style>
```

```
<h1 class="titulo">Titulo</h1>
```

## Para isso:

```
<h1 style="color: red;">Titulo</h1>
```

## Instalação

Após clonar o repositorio rode o npm para atualizar os pacotes.

```npm install```

## Modo de usar

Copie os arquivos a serem convertidos para dentro da pasta *to_convert*

Rode o comando:

```node toInlineCss.js```

O arquivo convertido será gerado na pasta *converted*
