<?php

$mensagem = "Nome: ".$_POST['firstname']." \n";
$mensagem .= "Email: ".$_POST['youremail']." \n";
$mensagem .= "Mensagem: ".$_POST['subject'];

mail("maumiyaji@gmail.com", "Formulário Teste", $mensagem);

echo "<script>
             alert('mensagem enviada! Obrigado!);
             window.location='https://miyajidesign.com/#contato';
     </script>";

?>