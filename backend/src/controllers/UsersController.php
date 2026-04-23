<?php
require_once __DIR__ . '/../config/db.php';

class UsersController {
	public static function getUsers() {
			global $pdo;

			try {
					$stmt = $pdo->query("SELECT * FROM users");
					$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

					header('Content-Type: application/json');
					echo json_encode($users);
			} catch (PDOException $e) {
					http_response_code(500);
					header('Content-Type: application/json');
					echo json_encode(['error' => 'Failed to fetch users']);
			}
	}

	public static function getUserByEmail(){
					
		global $pdo;

		header('Content-Type: application/json');

		if (!isset($_GET['email'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Email is required']);
        return;
    }

    try {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
        $stmt->execute([':email' => $_GET['email']]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode($user ?: null);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to fetch user']);
    }
	}

	public static function addUser(): int
	{
		global $pdo;

		header('Content-Type: application/json');

		$data = json_decode(file_get_contents('php://input'), true);

		if (!$data) {
				http_response_code(400);
				echo json_encode(['error' => 'Invalid JSON']);
				return 0;
		}


		$sql = "
				INSERT INTO users 
				(name, ust, kontaktperson, email, address, ort, plz, land)
				VALUES 
				(:name, :ust, :kontaktperson, :email, :address, :ort, :plz, :land)
		";

			$stmt = $pdo->prepare($sql);

			$stmt->execute([
				':name'=>$data['name'],
				':ust'=>$data['ust'],
				':kontaktperson'=>$data['kontaktperson'],
				':email'=>$data['email'],
				':address'=>$data['address'],
				':ort'=>$data['ort'],
				':plz'=>$data['plz'],
				':land'=>$data['land'],

			]);

			return (int)$pdo->lastInsertId();
	}
}