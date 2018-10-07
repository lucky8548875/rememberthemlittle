<?php
require_once("../openConnection.php");

$stmt = $conn->prepare('SELECT * FROM packages');
$stmt->execute();

$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
echo json_encode($stmt->fetchAll(),JSON_NUMERIC_CHECK);
?>