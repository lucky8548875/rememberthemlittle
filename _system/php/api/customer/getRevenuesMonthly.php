<?php
# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

$start_date = $_GET['start_date'];
$end_date = $_GET['end_date'];
if(true)
//if(isset($start_date) && isset($end_date))
{
    try
    {
        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        # Perform SQL Query
        // "SELECT 
        //         MONTHNAME(booking_date) as month, 
        //         SUM(booking_total_price) as sum 
        //     FROM bookings b 
        //     LEFT JOIN orders o
        //     ON b.booking_id = o.booking_id
        //     WHERE b.booking_status = 'BOOKED' AND o   
        //     GROUP BY month 
        //     ORDER BY booking_date ASC"
        $stmt = $conn->prepare(
            "SELECT 
                MONTHNAME(b.booking_date) as month, 
                SUM(b.booking_total_price + CASE
                    WHEN o.order_total_price IS NOT NULL 
                    THEN o.order_total_price 
                    ELSE 0
                END
                ) AS total 
            FROM bookings b 
            LEFT JOIN orders o 
            ON b.booking_id = o.booking_id 
                AND b.booking_status = 'BOOKED' 
                AND (o.order_status = 'RELEASED' OR o.order_status IS NULL)
            GROUP BY month 
            ORDER BY booking_date ASC"
        );
        $stmt->execute();
    
        # Fetch Result
        $months = array();
        $totals = array();
        while($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            array_push($months, $row['month']);
            array_push($totals, $row['total']);
        }
        $result = array(
            'months' => $months,
            'totals' => $totals
        );
        
        # Print Result in JSON Format
        echo json_encode((object)[
        'success' => true,
        'data' => $result
        ],JSON_NUMERIC_CHECK);
    }
    catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);
    }
}
?>