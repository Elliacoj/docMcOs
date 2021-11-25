<?php

header('Content-Type: application/json');
$request = $_SERVER["REQUEST_METHOD"];

switch ($request) {
    case "GET":
        echo get();
        break;
}

/**
 * Return a table of images
 * @return false|string
 */
function get() {
    $array = [];
    foreach (scandir("../images") as $file) {
        if (preg_match("#\.(jpg|jpeg|png|gif|bmp|tif)$#", strtolower($file))) {
            if ($file !== "fond.png")
                $array[] = ["img" => $file, "title" => substr($file, 0, strpos($file, '.'))];
        }
    }
    return json_encode($array);
}
