<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>adrar_classrooms</title>
</head>
<body>

<nav>
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Formations</a></li>
    <li><a href="#">Administration</a></li>
    <li class="search-icon"><i class="fas fa-search"></i></li>
    <li><a href="#">Account</a></li>
  </ul>
</nav>

<div class="search-bar">
  <form action="#">
    <input type="text" placeholder="Search...">
  </form>
</div>

    
</body>
</html>

<?php
    $DB_NAME = "adrar_classrooms";
    $DB_USER = "root";
    $DB_PASS = "";

    // Connexion à la base de données
    $bdd = new PDO('sql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS) ,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
?>


