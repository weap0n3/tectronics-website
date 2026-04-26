<?php
require_once __DIR__ . '/../config/db.php';

class OrdersController {
public static function addOrder(): void
{
    global $pdo;

    header('Content-Type: application/json');

    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data || count($data) < 2) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid data']);
        return;
    }

    $cart = $data['cart'];
    $user = $data['user'];

    if (!isset($user['id'])) {
        http_response_code(400);
        echo json_encode(['error' => 'User ID missing']);
        return;
    }

    try {
        $pdo->beginTransaction();

        $totalPrice=0;

        foreach ($cart as $item) 
        {
            $totalPrice += $item['price'] * $item['quantity'];
        }

        // 1. Create order
        $stmt = $pdo->prepare("
            INSERT INTO orders (user_id, total_price)
            VALUES (:user_id, :total_price)
        ");

        $stmt->execute([
            ':user_id' => $user['id'],
            ':total_price' => $totalPrice+($totalPrice < 70 ? 10 : 0)
        ]);

        $orderId = $pdo->lastInsertId();

        // 2. Insert order items
        $stmtItem = $pdo->prepare("
            INSERT INTO order_items (order_id, product_id, quantity, price)
            VALUES (:order_id, :product_id, :quantity, :price)
        ");

        foreach ($cart as $item) {
            $stmtItem->execute([
                ':order_id' => $orderId,
                ':product_id' => $item['id'],
                ':quantity' => $item['quantity'],
                ':price' => $item['price']
            ]);
        }

        $pdo->commit();

        echo json_encode([
            'success' => true,
            'order_id' => $orderId
        ]);

    } catch (PDOException $e) {
        $pdo->rollBack();

        http_response_code(500);
        echo json_encode([
            'error' => 'Failed to create order'
        ]);
    }
}
}