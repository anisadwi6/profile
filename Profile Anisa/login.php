<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="style.css">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous">
</head>
<body>
    <form action="pbl.php" method="POST">
        <div class="container mt-20">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingFirst" placeholder="Firstname" name="firstname">
                <label for="floatingFirst">Firstname</label> 
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingLast" placeholder="Lastname" name="lastname" >
                <label for="floatingLast">Lastname</label> 
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPhone" placeholder="Phone Number" name="phonenumber">
                <label for="floatingPhone">Phone Number</label> 
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Address" id="floatingTextarea" style="height: 100px" name="address"></textarea>
                <label for="floatingTextarea">Address</label> 
            </div>
            <div class="d-flex justify-content-center">
                <input class="btn btn-primary" type="submit" value="Submit" name="Submit">
            </div>
            <?php 
            if(isset($_SESSION['firstname'], $_SESSION['lastname'], $_SESSION['phonenumber'], $_SESSION['address'])){
                echo "<b>Hi, My name is " .$_SESSION['firstname'] ."&nbsp;" .$_SESSION['lastname'] ."<br>";
                echo "Phone Number : " .$_SESSION['phonenumber'] . "<br>";
                echo "Address : " .$_SESSION['address'] . "<br>"."</b>";
                echo "<h6>Reset</h6>";
                unset($_SESSION['firstname'], $_SESSION['phonenumber'], $_SESSION['address']); 
            }
            ?>
        </div>
   </form>
</body>
</html>