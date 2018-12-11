<?php
   
    $servername = "localhost";
    $username = "root";
    $password = null;
    $dbname = "examples";
    $con = mysqli_connect($servername,$username,$password,$dbname);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    mysqli_select_db($con,"ajax");
    $sql = "SELECT * FROM info_house";
    $result = mysqli_query($con,$sql);

    $dataResponse = [];


    while($row = mysqli_fetch_assoc($result)){
          array_push($dataResponse, [
            'id_house'   => $row['id_house'],
            'dien_tich'   => $row['dien_tich'],
            'dai'   => $row['dai'],
            'rong'   => $row['rong'],
            'chung_cu'   => $row['chung_cu'],
            'floors'   => $row['floors'],
            'street'   => $row['street'],
            'ward'   => $row['ward'],
            'district'   => $row['district'],
            'city'   => $row['city'],
            'numberPeopleCanLive' => $row['number_people_in_house'],
            'validates'   => $row['validates'],
            'status'   => $row['status'],
            'description'   => $row['description'],
            'price' => $row['price'],
            'image1' => $row['image1'],
            'image2' => $row['image2'],
            'image3' => $row['image3'],
            'image4' => $row['image4'],
            'sofa' => $row['sofa'],
            'numberBedroom' => $row['bedroom'],
            'numberBathroom' => $row['bathroom'],
            'toilet' => $row['toilet'],
            'kitchen' => $row['kitchen'],
            'bed' => $row['bed'],
            'garden' => $row['garden'],
            'wifi' => $row['wifi'],
            'electricity' => $row['electricity'],
            'water' => $row['water'],
            'airConditioner' => $row['air_conditioner'],
            'tv' => $row['tivi'],
            'refrigerator' => $row['refrigerator'],
            'washingMachine' => $row['washing_machine'],
            'pet' => $row['pet'],
            'typeOfHouse'   => $row['loaicanho'],
            'typeOfProject' => $row['loaiduan'],
            'furnishment' => utf8_encode($row['noithat']),
          ]); 
          //$dataResponse[] = $row;

    }

    echo json_encode($dataResponse); 
    //$cart_info_json = json_encode($dataResponse); 
    mysqli_close($con);
?>