<?php

$directory = 'test';
$image = $_SERVER['DOCUMENT_ROOT'].'/'.$directory.'//images/' . basename($_FILES['image']['name']);

if(isset($_FILES)){

    if (copy($_FILES['image']['tmp_name'], $image)) {

        echo json_encode((object)[
            'success' => true,
            'data' => '/_system/images/'.basename($_FILES['image']['name'])
        ]);

    }
    else {
        echo json_encode((object)[
            'success' => false,
            'message' => 'Error: Unable to copy file'
        ]);
    }
        

}
else {
    echo json_encode((object)[
        'success' => false,
        'message' => 'Missing Image'
    ]);
}