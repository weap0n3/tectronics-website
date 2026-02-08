<?php 

require __DIR__ . '/../src/config/db.php'; // Include database connection

$sql = "SELECT id, name, price, photo, description, link FROM products";
// Execute the SQL query
$result = $conn->query($sql);

// Process the result set
if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Price: " . $row["price"]. " - Description: " . $row["description"]. " - Link: " . $row["link"]. "<br>";
  }
} else {
  echo "0 results";
}