<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$theme_id = $_POST['theme_id'];
$theme_description = $_POST['theme_description'];
$theme_image = $_POST['theme_image'];

    # Check parameters if null
if (isset($theme_id)) {


    if (true) {
        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $sql = "UPDATE themes SET theme_description='$theme_description', theme_image='$theme_image' WHERE theme_id='$theme_id'";
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
            'message' => $theme_image
        ]);
    }
    
}
else if (isset($theme_id) && isset($theme_description)) {

        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $sql = "UPDATE themes SET theme_description='$theme_description' WHERE theme_id='$theme_id'";
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