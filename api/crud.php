<?php

header('Content-Type: application/json');
$request = $_SERVER["REQUEST_METHOD"];

switch ($request) {
    case "GET":
        echo get();
        break;
    case "POST":
        post();
        break;
}

/**
 * Return a table of images
 * @return false|string
 */
function get() {
    $array = [];
    foreach (scandir("../images") as $file) {
        if (preg_match("#\.(jpg|jpeg|png|gif|bmp|tif|webp)$#", strtolower($file))) {
            if ($file !== "fond.png")
                $array[] = ["img" => $file, "title" => substr($file, 0, strpos($file, '.'))];
        }
    }
    return json_encode($array);
}

/**
 * Add an image into doc images
 */
function post() {
    $name = $_POST['name'];
    $imgs = $_FILES;

    foreach ($imgs as $img) {
        $imgName = $name . substr($img['name'], strripos($img['name'], "."));
        move_uploaded_file($img['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . '/images/' . $imgName);
    }
}
