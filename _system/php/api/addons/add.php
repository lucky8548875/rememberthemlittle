<?php

# Set database parameters
$servername = "localhost";
$username = "root";
$password = "mysql";

# Retrieve POST parameters
$addon_type = $_POST['addon_type'];
$addon_description = $_POST['addon_description'];
$addon_price = $_POST['addon_price'];
$addon_active = $_POST['addon_active'];

# Check parameters if null
if (isset($addon_type) && isset($addon_description) && isset($addon_price) && isset($addon_active)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $sql = "INSERT INTO addons (addon_type, addon_description, addon_price, addon_active) VALUES ('$addon_type', '$addon_description', $addon_price, '$addon_active')";
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

