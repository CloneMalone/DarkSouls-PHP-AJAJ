<?php
class DB_200 {
    private $conn;

    private $hostName = "localhost";
    private $userName = "root";
    private $password = "";
    public $databaseName = "darksouls";

    public $characters = "characters";
    public $factions = "factions";
    public $weapons = "weapons";

    public function __construct() {
        $this->conn = new mysqli($this->hostName, $this->userName, $this->password, $this->databaseName);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    
    public function read($table, $id = null) {
    if ($id === null) {
        $sql = "SELECT * FROM $table";
    } else {
        $sql = "SELECT * FROM $table WHERE id = $id";
    }

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