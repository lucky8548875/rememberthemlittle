<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$theme_description = $_POST['theme_description'];
$theme_image = $_SERVER['DOCUMENT_ROOT'].'/_system/images/' . basename($_FILES['theme_image']['name']);

    # Check parameters if null
if (isset($theme_description) && isset($_FILES)) {


    if (copy($_FILES['theme_image']['tmp_name'], $theme_image)) {
        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $sql = "INSERT INTO themes (theme_description, theme_image) VALUES ('$theme_description', '".'/_system/images/'.basename($_FILES['theme_image']['name'])."')";
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