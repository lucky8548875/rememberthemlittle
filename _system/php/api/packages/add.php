<?php

# Set database parameters
$servername = "localhost";
$username = "root";
$password = "mysql";

# Retrieve POST parameters
$package_name = $_POST['package_name'];
$package_description = $_POST['package_description'];
$package_price = $_POST['package_price'];
$package_minutes = $_POST['package_minutes'];
$package_themes = $_POST['package_themes'];
$package_active = $_POST['package_active'];
$category_id = $_POST['category_id'];

# Check parameters if null
if (isset($package_name) && isset($package_description) && isset($package_price) && isset($package_minutes) && isset($package_themes) && isset($package_active) && isset($category_id)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $sql = "INSERT INTO packages (package_name, package_description, package_price, package_minutes, package_themes, package_active, category_id) VALUES ('$package_name', '$package_description', $package_price, $package_minutes, $package_themes, '$package_active', $category_id)";
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

