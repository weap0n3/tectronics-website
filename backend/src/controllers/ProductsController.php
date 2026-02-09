<?php
require_once __DIR__ . '/../config/db.php';

class ProductsController {
    public static function getProducts() {
        global $pdo;
        $stmt = $pdo->query("SELECT id, name, price, photo, description, link FROM products");
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
    }
}