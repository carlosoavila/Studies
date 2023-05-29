<?php 
  //Parâmetros de conexão
  define('HOST', 'localhost');
  define('USER', 'root');
  define('PASSWORD', '');
  define('DB', 'bd_curso');

  //Criar o objeto de conexão
  $conn = new mysqli(HOST, USER, PASSWORD, DB);

  if($conn -> connect_error) {
    die("Falha na conexão...");
  }

?>