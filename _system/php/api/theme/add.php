<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$theme_description = $_POST['theme_description'];
$theme_image = $_POST['theme_image'];

    # Check parameters if null
if (isset($theme_description)) {


    if (true) {
        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $sql = "INSERT INTO themes (theme_description, theme_image) VALUES ('$theme_description', '$theme_image')";
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