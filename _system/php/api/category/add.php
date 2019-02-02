<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$category_name = $_POST['category_name'];
$category_description = $_POST['category_description'];
$category_image = $_POST['category_image'];
$category_active = $_POST['category_active'];

    # Check parameters if null
if (true) {


    if (true) {
        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $sql = "INSERT INTO categories (category_name,category_description, category_image, category_active) VALUES ('$category_name','$category_description', '$category_image','$category_active')";
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
        echo json_encode((object)[
            'success' => false,
            'message' => $category_image
        ]);
    }
    
} else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set"
    ]);
}