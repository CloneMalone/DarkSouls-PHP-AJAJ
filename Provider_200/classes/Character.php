<?php

class Character {
    private $id;
    private $name;
    private $class;
    private $level;
    private $faction_id;
    private $weapon_id;

    public function __construct($id = null, $name = "", $class = "", $level = 0, $faction_id = null, $weapon_id = null) {
        $this->id = $id;
        $this->name = $name;
        $this->class = $class;
        $this->level = $level;
        $this->faction_id = $faction_id;
        $this->weapon_id = $weapon_id;
    }

    // getters and setters
    public function getId() {
        return $this->id;
    }
    public function getName() {
        return $this->name;
    }
    public function getClass() {
        return $this->class;
    }
    public function getLevel() {
        return $this->level;
    }
    public function getFactionId() {
        return $this->faction_id;
    }
    public function getWeaponId() {
        return $this->weapon_id;
    }

    public function setId($id) {
        $this->id = $id;
    }
    public function setName($name) {
        $this->name = $name;
    }
    public function setClass($class) {
        $this->class = $class;
    }
    public function setLevel($level) {
        $this->level = $level;
    }
    public function setFactionId($faction_id) {
        $this->faction_id = $faction_id;
    }
    public function setWeaponId($weapon_id) {
        $this->weapon_id = $weapon_id;
    }

    // Incase we want to return the character as an array for JSON encoding
    public function toArray() {
    return [
        "id" => $this->id,
        "name" => $this->name,
        "class" => $this->class,
        "level" => $this->level,
        "faction_id" => $this->faction_id,
        "weapon_id" => $this->weapon_id
    ];
}

}

?>