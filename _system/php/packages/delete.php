<?php
$servername = "localhost";
$dbname = "rtl_v1";
$username = "root";
$password = "mysql";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $id = 'Something123';

    $stmt = $conn->prepare("DELETE FROM packages WHERE id = :id");
    $stmt->bindValue(":id", $id);
    $stmt->execute();
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

$conn = null;
?>