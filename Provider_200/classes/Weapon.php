<?php 

class Weapon {
    private $id;
    private $name;
    private $damage;
    private $scaling;
    private $weight;

    public function __construct($id = null, $name = "", $damage = 0, $scaling = "", $weight = 0.0) {
        $this->id = $id;
        $this->name = $name;
        $this->damage = $damage;
        $this->scaling = $scaling;
        $this->weight = $weight; 
    }

    // getters and setters
    public function getId() {
        return $this->id;
    }
    public function getName() {
        return $this->name;
    }
    public function getDamage() {
        return $this->damage;
    }
    public function getScaling() {
        return $this->scaling;
    }
    public function getWeight() {
        return $this->weight;
    }

    public function setId($id) {
        $this->id = $id;
    }
    public function setName($name) {
        $this->name = $name;
    }
    public function setDamage($damage) {
        $this->damage = $damage;
    }
    public function setScaling($scaling) {
        $this->scaling = $scaling;
    }
    public function setWeight($weight) {
        $this->weight = $weight;
    }

    // Incase we want to return the weapon as an array for JSON encoding
    public function toArray() {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "damage" => $this->damage,
            "scaling" => $this->scaling,
            "weight" => $this->weight
        ];
    }
}

?>