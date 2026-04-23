<?php

require_once __DIR__ . '/../controllers/ProductsController.php';
require_once __DIR__ . '/../controllers/OrdersController.php';
require_once __DIR__ . '/../controllers/UsersController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$uri = rtrim($uri, '/');

if ($uri === "/api/getProducts") {
    ProductsController::getProducts();
}
elseif ($uri === "/api/addOrder" && $_SERVER['REQUEST_METHOD'] === 'POST') {
    OrdersController::addOrder();
}
elseif ($uri === "/api/getUsers" && $_SERVER['REQUEST_METHOD'] === 'GET') {
    UsersController::getUsers();
}
elseif($uri==="/api/addUser" && $_SERVER['REQUEST_METHOD'] === 'POST'){
    UsersController::addUser();
}
elseif($uri === "/api/getUsers/email" && $_SERVER['REQUEST_METHOD'] === 'GET'){
    UsersController::getUserByEmail();
}
else {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Route not found']);
}