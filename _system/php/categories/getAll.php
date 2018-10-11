<?php
require("../openConnection.php");

try {
    $sql = "SELECT * FROM categories";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    echo json_encode($stmt->fetchAll(),JSON_NUMERIC_CHECK);
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
require("../closeConnection.php");
?>