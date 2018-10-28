<?php

# Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

# Retrieve POST parameters
$category_id = $_POST['category_id'];
$category_name = $_POST['category_name'];
$category_description = $_POST['category_description'];
$category_active = $_POST['category_active'];

# Check parameters if null
if (isset($category_id) && isset($category_name) && isset($category_description) && isset($category_active)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $sql = "UPDATE categories SET category_name='$category_name', category_description='$category_description', category_active='$category_active' WHERE category_id='$category_id'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Print success
        echo json_encode((object)[
            'success' => true
        ]);

    } catch (PDOException $e) {

        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);

    }
}
else {
    echo 'values not set';
}

