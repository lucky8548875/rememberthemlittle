<?php
$servername = "localhost";
$dbname = "rtl_v1";
$username = "root";
$password = "mysql";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

    class Dummy {};
    $prep = $conn->prepare("SELECT * FROM dummy");
    $prep->execute();
    $result = $prep->fetchAll(PDO::FETCH_CLASS, 'Dummy');
    echo json_encode($result);
?>
