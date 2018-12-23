<?php
# Set database parameters
$servername = "localhost";  
$username = "root";
$password = "mysql";

#Retrieve POST parameters
$month = "October"; #$_POST['from_date'];

if (isset($month))
{
    try
    {
        $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //echo $booking_date."<br>";
             
        //echo $upto_date;

        # Perform SQL Query
        $sql = "SELECT booking_date, booking_status, COUNT(*) AS 'count' FROM bookings GROUP BY booking_date, booking_status ORDER BY booking_date ASC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Fetch Result And Organize

        $bookings = array();
        while($row = $stmt->fetch())
        {
            if($row['booking_date'] != $current_date)
            {
                $current_date = $row['booking_date'];
            }
            if($row['booking_status'] != $current_status)
            {
                $current_status = $row['booking_status'];
            }
            $bookings[$current_date][$current_status] = $row['count'];
        }

        print_r($bookings);
        //$upto_date = strtotime($upto_date);
    }
    catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed" . $e->getMessage()
        ]);
    }
}