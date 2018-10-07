<?php
require_once("../openConnection.php");

$col = "Col_n";
$val = "Value";
$id = "Something123";

$stmt = $conn->prepare("UPDATE categories SET $col = $val WHERE id = :id");
$stmt->bindValue(":id", $id);
$stmt->execute();
?>