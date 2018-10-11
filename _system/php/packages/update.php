<?php
require("../openConnection.php");

if($_POST['package_id'])
{
    $package_id = $_POST['package_id'];

    $sql = "UPDATE packages SET package_name = :name, package_description = :description, package_price = :price, package_active = :active, package_created = :created, category_id = :category_id WHERE package_id = :package_id";

    if($_POST['name'])
    {
        $name = $_POST['name'];
    }
    if($_POST['description'])
    {
        $description = $_POST['description'];
    }
    if($_POST['price'])
    {
        $price = $_POST['price'];
    }
    if(isset($_POST['active']))
    {
        $active = $_POST['active'];
    }
    if($_POST['created'])
    {
        $created = $_POST['created'];
    }
    if($_POST['category_id'])
    {
        $category_id = $_POST['category_id'];
    }

    try
    {
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":package_id", $package_id);
        $stmt->bindValue(":name", $name);
        $stmt->bindValue(":description", $description);
        $stmt->bindValue(":price", $price);
        $stmt->bindValue(":active", $active);
        $stmt->bindValue(":created", $created);
        $stmt->bindValue(":category_id", $category_id);
        $stmt->execute();
    }
    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }
}

require("../closeConnection.php");
?>