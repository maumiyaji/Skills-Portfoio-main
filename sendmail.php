<?php

$mensagem = "Nome: ".$_POST['name']." \n";
$mensagem .= "Email: ".$_POST['email']." \n";
$mensagem .= "Mensagem: ".$_POST['subject'];

mail("maumiyaji@gmail.com", "Formulário Teste", $mensagem);

?>