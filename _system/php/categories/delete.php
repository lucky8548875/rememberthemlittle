<?php
require_once("../openConnection.php");

$id = 'Something123';

$stmt = $conn->prepare("DELETE FROM categories WHERE id = :id");
$stmt->bindValue(":id", $id);
$stmt->execute();
?>