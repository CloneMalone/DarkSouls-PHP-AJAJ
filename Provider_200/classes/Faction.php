<?php 

class Faction {
    private $id;
    private $name;
    private $alignment;
    private $leader;
    private $territory;

    public function __construct($id = null, $name = "", $alignment = "", $leader = "", $territory = "") {
        $this->id = $id;
        $this->name = $name;
        $this->alignment = $alignment;
        $this->leader = $leader;
        $this->territory = $territory;
    }

    // getters and setters
    public function getId() {
        return $this->id;
    }
    public function getName() {
        return $this->name;
    }
    public function getAlignment() {
        return $this->alignment;
    }
    public function getLeader() {
        return $this->leader;
    }
    public function getTerritory() {
        return $this->territory;
    }

    public function setId($id) {
        $this->id = $id;
    }
    public function setName($name) {
        $this->name = $name;
    }
    public function setAlignment($alignment) {
        $this->alignment = $alignment;
    }
    public function setLeader($leader) {
        $this->leader = $leader;
    }
    public function setTerritory($territory) {
        $this->territory = $territory;
    }

    // Incase we want to return the faction as an array for JSON encoding
    public function toArray() {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "alignment" => $this->alignment,
            "leader" => $this->leader,
            "territory" => $this->territory
        ];
    }

}


?>