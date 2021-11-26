<?php

header('Content-Type: application/json');
$request = $_SERVER["REQUEST_METHOD"];

switch ($request) {
    case "GET":
        echo get();
        break;
    case "PUT":
        put(json_decode(file_get_contents("php://input")));
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
 * @param $data
 * @return bool
 */
function put($data): bool {
    $name = $data->name;
    $img = str_replace("//", "/", $data->img);
    $imgName = $name . substr($img, strripos($img, "."));
    print_r(file_get_contents($img));
    $move = move_uploaded_file($img, './public/images/' . $imgName);
    if($move) {
        return true;
    }
    else {
        return false;
    }
}
