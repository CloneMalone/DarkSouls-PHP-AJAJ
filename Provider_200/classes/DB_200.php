<?php
class DB_200 {
    private $conn;

    public function __construct() {
        $this->conn = new mysqli("localhost", "root", "", "darksouls");

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    /*
    IMPORTANT: The read function is designed to be flexible but I also added readAll and readById for convenience in the tester page. You can choose to use any of these based on your needs, and we will remove ones we don't use.
    Also, I might have to refactor these and add prepared statements instead for security, but we will see how it goes with the tester page first.
    */ 
    public function read($table, $id = null) {
    if ($id === null) {
        $sql = "SELECT * FROM $table";
    } else {
        $sql = "SELECT * FROM $table WHERE id = $id";
    }

    return $this->conn->query($sql);
    }

    public function readAll($table) {
        $sql = "SELECT * FROM $table";
        return $this->conn->query($sql);
    }

    public function readById($table, $id) {
        $sql = "SELECT * FROM $table WHERE id = $id";
        return $this->conn->query($sql);
    }

    public function insert($table, $data) {
        $columns = implode(", ", array_keys($data));
        $values = array_map(function($value) {
            return "'" . $value . "'";
        }, array_values($data));

        $valuesString = implode(", ", $values);
        $sql = "INSERT INTO $table ($columns) VALUES ($valuesString)";
        return $this->conn->query($sql);
    }

    public function update($table, $id, $data) {
        $updates = [];
        foreach ($data as $key => $value) {
            $updates[] = "$key = '$value'";
        }

        $updatesString = implode(", ", $updates);
        $sql = "UPDATE $table SET $updatesString WHERE id = $id";
        return $this->conn->query($sql);
    }

    public function delete($table, $id) {
        $sql = "DELETE FROM $table WHERE id = $id";
        return $this->conn->query($sql);
    }

    public function __destruct() {
        $this->conn->close();
    }
}
?>