<?php
session_start();
class User {
    public $firstname;
    public $lastname;
    public $phonenumber;
    public $address;

    //setter
    public function setFirstname($firstname) {
        $this->firstname = $firstname;
    }
    public function setLastname($lastname) {
        $this->lastname = $lastname;
    }
    public function setPhonenumber($phonenumber) {
        $this->phonenumber = $phonenumber;
    }
    public function setAddress($address) {
        $this->address = $address;
    }

    // Getter
    public function getFirstname() {
        return $this->firstname;
    }
    public function getLastname() {
        return $this->lastname;
    }
    public function getPhonenumber() {
        return $this->phonenumber;
    }
    public function getAddress() {
        return $this->address;
    }


    public function submit() {
            $_SESSION['firstname']   = $this->firstname;
            $_SESSION['lastname']    = $this->lastname;
            $_SESSION['phonenumber'] = $this->phonenumber;
            $_SESSION['address']     = $this->address; 
            if ($this->firstname == "Rifqi" && $this->lastname == "Ardhian") {
            header("Location: login.php");
            exit();
        }
    }
}

if(isset($_POST['Submit'])) {
    $user = new User();
    $user->setFirstname($_POST['firstname']);
    $user->setLastname($_POST['lastname']);
    $user->setPhonenumber($_POST['phonenumber']);
    $user->setAddress($_POST['address']);
    $user->submit();
}
?>