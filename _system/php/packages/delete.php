<?php
require("../openConnection.php");

if($_POST['id'])
{
    $id = $_POST['id'];
}

try {
    $sql = "DELETE FROM packages WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(":id", $id);
    $stmt->execute();
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

require("../closeConnection.php");
?>