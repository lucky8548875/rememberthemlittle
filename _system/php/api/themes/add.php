<?php
    
    # Set database parameters
    $servername = "localhost";
    $username = "root";
    $password = "mysql";

    # Retrieve POST parameters
    $theme_description = $_POST['theme_description'];
    $theme_image = $_POST['theme_image'];
 
    # Check parameters if null
    if (isset($theme_description) && isset($theme_image)) {
        try {
            # Connect to Database
            $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
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
} else {
    echo 'values not set';
}