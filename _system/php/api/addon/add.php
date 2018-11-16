<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'] . '/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$addon_type = $_POST['addon_type'];
$addon_description = $_POST['addon_description'];
$addon_price = $_POST['addon_price'];
$addon_max = $_POST['addon_max'];
$addon_active = $_POST['addon_active'];

    # Check parameters if null
if (isset($addon_description)) {

        try {
            # Connect to Database
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
            $sql = "INSERT INTO addons (addon_type, addon_description, addon_price, addon_max, addon_active) VALUES ('$addon_type', '$addon_description', '$addon_price', '$addon_max', '$addon_active')";
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

} else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set"
    ]);
}