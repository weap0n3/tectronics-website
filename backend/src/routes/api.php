<?php

require_once __DIR__ . '/../controllers/ProductsController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$uri = rtrim($uri, '/');

if ($uri === "/api/products") {
    ProductsController::getProducts();
} else {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Route not found']);
}