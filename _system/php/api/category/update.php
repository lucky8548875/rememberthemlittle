<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$category_id = $_POST['category_id'];
$category_name = $_POST['category_name'];
$category_description = $_POST['category_description'];
$category_image = $_SERVER['DOCUMENT_ROOT'].'/_system/images/' . basename($_FILES['category_image']['name']);
$category_active = $_POST['category_active'];

    # Check parameters if null
if (isset($category_id) && isset($category_name) && isset($category_description) && isset($_FILES['category_image']['tmp_name'])) {


    if (copy($_FILES['category_image']['tmp_name'], $category_image)) {
        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $category_image_relative_filename = '/_system/images/'.basename($_FILES['category_image']['name']);
        $sql = "UPDATE categories SET category_name='$category_name',category_description='$category_description', category_image='$category_image_relative_filename', category_active='$category_active' WHERE category_id='$category_id'";
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
    
}
else if (isset($category_id) && isset($category_name) && isset($category_description)) {

        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $sql = "UPDATE categories SET category_name='$category_name',category_description='$category_description', category_active='$category_active' WHERE category_id='$category_id'";
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
        'message' => "Values not set"
    ]);
}