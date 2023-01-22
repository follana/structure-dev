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

// check if form was submitted
if (isset($_POST['submit'])) {

    $name = "";
    $firstName = "";
    $login ="";
    $pass="";

    if (isset($_POST['title'])){
        $name = $_POST['title'];
    }

    if (isset($_POST['content'])){
        $firstName = $_POST['content'];
    }

    if (isset($_POST['content'])){
        $login = $_POST['content'];
    }

    if (isset($_POST['content'])){
        $pass = $_POST['content'];
    }


    if (!empty($name) && !empty($firstName)&& !empty($login)&&!empty($pass)) {

        $stmt = $bdd->prepare("INSERT INTO users (name_user, first_name_user, login_user, pass_user) VALUES (:name, :content , :login, :pass)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':content', $firstName);
        $stmt->bindParam(':login', $login);
        $stmt->bindParam(':pass', $pass);
        $stmt->execute();

        // message to confirm insertion
        echo "New record created successfully";
    }
}

$request = $bdd->prepare("SELECT name_user, first_name_user, login_user, pass_user FROM users");
$request->execute();

while($row = $request->fetch()) {
    echo "name_user: " . $row["name_user"]. " - fisrt_name_user: " . $row["fisrt_name_user"]."login_user: " . $row["login_user"]."pass_user: " . $row["pass_user"]. "<br>";
}



?>