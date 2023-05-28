<?php
    $nome_produto = $_POST["txtProduto"];
    $categoria = $_POST["ddlCategoria"];
    $descricao = $_POST["txtDescricao"];

    echo ("Nome do produto: $nome_produto 
            <br>
          Categotia do produto: $categoria
            <br>
          Descricação do produto: $descricao");
  ?> 