<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Test fetch from database</h1>
</body>
</html>

<?php

$DB_NAME = "articles";
$DB_USER = "root";
$DB_PASS = "";

// Create connection
$bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

$request = $bdd->prepare("SELECT nom_article, contenu_article FROM article");
$request->execute();

while($row = $request->fetch()) {
    echo "nom_article: " . $row["nom_article"]. " - contenu_article: " . $row["contenu_article"]. "<br>";
}
?>