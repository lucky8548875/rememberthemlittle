<?php
require("../openConnection.php");

if($_POST['id'])
{
    $id = $_POST['id'];

    $sql = "UPDATE categories SET category_name = :name, category_description = :description, category_active = :active WHERE category_id = :id";

    if($_POST['name'])
    {
        $name = $_POST['name'];
    }
    if($_POST['description'])
    {
        $description = $_POST['description'];
    }
    if(isset($_POST['active']))
    {
        $active = $_POST['active'];
    }

    try
    {
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":id", $id);
        $stmt->bindValue(":name", $name);
        $stmt->bindValue(":description", $description);
        $stmt->bindValue(":active", $active);
        $stmt->execute();
    }
    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }
}

require("../closeConnection.php");
?>