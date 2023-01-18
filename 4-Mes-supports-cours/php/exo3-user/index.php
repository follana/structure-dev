<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 3 </title>
</head>
<body>

<h1>exercice 3 intégration user</h1>

<form action="index.php" method="POST" enctype="multipart/form-data">
            <h2>Travailler sur base de donnée</h2>
            
            <input type="text" name="name_user" placeholder="name user">
            <br>
            <input type="text" name="first_name_user" placeholder="first name">
            <br>
            <input type="text" name="login_user" placeholder="login">
            <br>
            <input type="text" name="pass_user" placeholder="pass">
            <br>
            <button type="submit" value="ajouter">ajouter</button>
        </form>
    
</body>
</html>

<?php
$DB_NAME = "exo3bdd";
$DB_USER = "root";
$DB_PASS = "";

$bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));



?>