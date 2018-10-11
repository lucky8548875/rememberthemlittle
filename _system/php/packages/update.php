<?php
$servername = "localhost";
$dbname = "rtl_v1";
$username = "root";
$password = "mysql";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $col = "Col_n";
    $val = "Value";
    $id = "Something123";

    $sql = "UPDATE packages SET $col = $val WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(":id", $id);
    $stmt->execute();
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

$conn = null;




//$name = $_POST['name'];

?>