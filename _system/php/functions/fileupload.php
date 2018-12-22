<?php

$file_image = $_SERVER['DOCUMENT_ROOT'] . '/images/' . basename($_FILES['file_image']['name']);
if (isset($_FILES)) {
    if (copy($_FILES['file_image']['tmp_name'], $file_image)) {

        echo json_encode((object)[
            'success' => true,
            'filename' => basename($_FILES['file_image']['name'])
        ]);

    } else {
        echo json_encode((object)[
            'success' => false,
            'message' => basename($_FILES['file_image']['name'])
        ]);
    }
}