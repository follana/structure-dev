<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="index.php" method="POST" enctype="multipart/form-data">
            <h2>Travailler sur base de donnée</h2>
            
            <input type="text" name="nom_article" placeholder="article">
            <br>
        
            <input type="text" name="contenu_article"placeholder="contenu">
            <br>
            <button type="submit" value="ajouter">ajouter</button>
        </form>
    
</body>
</html>


<?php
$DB_NAME = "database_test";
$DB_USER = "root";
$DB_PASS = "4886paris34";

$bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

// check if form was submitted
if (isset($_POST['submit'])) {

    $name = "";
    $content = "";

    if (isset($_POST['title'])){
        $name = $_POST['title'];
    }

    if (isset($_POST['content'])){
        $content = $_POST['content'];
    }

    if (!empty($name) && !empty($content)) {

        $stmt = $bdd->prepare("INSERT INTO article (nom_article, contenu_article) VALUES (:name, :content)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':content', $content);
        $stmt->execute();

        // message to confirm insertion
        echo "New record created successfully";
    }
}
?>
