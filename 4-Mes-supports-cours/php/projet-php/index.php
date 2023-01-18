<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="script.js"defer></script>
        <title>Importer un fichier</title>
    </head>
    <body>
    <!-- <form action="index.php" method="POST" enctype="multipart/form-data" onchange="verifyfile()">
            <h2>Please upload an image</h2>
            <input type="file" id="file" value="" multiple name="file[]">
            <br>
            <button type="submit" id="submit">Upload</button>
        </form> -->

        <form action="index.php" method="POST">



        </form>
    </body>
</html>


<?php
 $DB_NAME = "articles";
 $DB_USER = "root";
 $DB_PASS = "";

 $bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

?>



<?php
/*
 * -----------------------------------------------------
 *              Test (import du fichier) :
 * -----------------------------------------------------
*/
 // Permet de tester si le fichier importé existe et qu'il est différent de NULL
// if (isset($_FILES['file'])) {
//     // Stocke le chemin et le nom temporaire du fichier importé (ex /tmp/125423.pdf)
//     $tmpName = $_FILES['file']['tmp_name'];

//     // Stocke le nom du fichier (nom du fichier et son extension importé ex : test.jpg)
//     $name = $_FILES['file']['name'];
   
//     // Stocke la taille du fichier en octets
//     $size = $_FILES['file']['size'];
   
//     // Stocke les erreurs (problème d'import, de droits, etc...)
//     $error = $_FILES['file']['error'];
   
//     // Déplace le fichier importé dans le dossier image à la racine du projet
//     $fichier = move_uploaded_file($tmpName, "./import/imgs/$name");
// }?>



