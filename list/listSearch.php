<?php
    $typeOfHouse = $_GET['typeOfHouse'];
    $typeOfProject = $_GET['typeOfProject'];
    $numberBedroom = $_GET['numberBedroom'];
    $numberBathroom = $_GET['numberBathroom'];
    $minPrice = $_GET['minPrice'];
    $maxPrice = $_GET['maxPrice'];
    $numberPeopleCanLive = $_GET['numberPeopleCanLive'];
    $furnishment = $_GET['furnishment'];
    //interval
    $kitchen = $_GET['kitchen'];

    $garden = $_GET['garden'];
    $wifi = $_GET['wifi'];
    $electricity = $_GET['electricity'];
    $water = $_GET['water'];
    $airConditioner = $_GET['airConditioner'];
    $tv = $_GET['tv'];
    $refrigerator = $_GET['refrigerator'];
    $washingMachine = $_GET['washingMachine'];
    $pet = $_GET['pet'];
    
    $servername = "localhost";
    $username = "root";
    $password = null;
    $dbname = "examples";
    $con = mysqli_connect($servername,$username,$password,$dbname);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    mysqli_select_db($con,"ajax");

    $sql = "SELECT * FROM info_house WHERE ";

    if($typeOfHouse != "House"){
        $sql = $sql . "loaicanho = " . "'" . $typeOfHouse . "'" . " AND ";
    }
    if($typeOfProject != "Project"){
        $sql = $sql . "loaiduan = " . "'" . $typeOfProject . "'" . " AND ";
    }
    if($numberBedroom != "Bedroom"){
        $sql = $sql . "bedroom = " . (int)$numberBedroom . " AND ";
    }
    if($numberBathroom != "Bathroom"){
        $sql = $sql . "bathroom = " . (int)$numberBathroom . " AND ";
    }

    if($minPrice != "Min Price" ){
        $sql = $sql . "price >= " . (int)$minPrice . " AND ";
    }
    if($maxPrice != "Max Price"){
        $sql = $sql . "price <=" . (int)$maxPrice . " AND ";
    }
    if($numberPeopleCanLive != "Number People can live"){
        $sql = $sql . "number_people_in_house = " . (int)$numberPeopleCanLive . " AND ";
    }
    if($furnishment != "Furnishment"){
        $sql = $sql . "noithat = " . "'" . $furnishment . "'" . " AND ";
    }

    if($kitchen == "false"){
        $kitchen = 0;
    }else{
        $kitchen = 1;
    }
    if($garden == "false"){
        $garden = 0;
    }else{
        $garden = 1;
    }
    if($wifi == "false"){
        $wifi = 0;
    }else{
        $wifi = 1;
    }
    if($electricity == "false"){
        $electricity = 0;
    }else{
        $electricity = 1;
    }
    if($water == "false"){
        $water = 0;
    }else{
        $water = 1;
    }
    if($airConditioner == "false"){
        $airConditioner = 0;
    }else{
        $airConditioner = 1;
    }
    if($tv == "false"){
        $tv = 0;
    }else{
        $tv = 1;
    }
    if($refrigerator == "false"){
        $refrigerator = 0;
    }else{
        $refrigerator = 1;
    }
    if($washingMachine == "false"){
        $washingMachine = 0;
    }else{
        $washingMachine = 1;
    }
    if($pet == "false"){
        $pet = 0;
    }else{
        $pet = 1;
    }

    $sql = $sql . 'kitchen = ' . $kitchen . ' AND ' ;
    $sql = $sql . 'garden = ' . $garden . ' AND ' ;
    $sql = $sql . 'wifi = ' . $wifi . ' AND ' ;
    $sql = $sql . 'electricity = ' . $electricity . ' AND ' ;
    $sql = $sql . 'water = ' . $water . ' AND ' ;
    $sql = $sql . 'air_conditioner = ' . $airConditioner . ' AND ' ;
    $sql = $sql . 'tivi = ' . $tv . ' AND ' ;
    $sql = $sql . 'refrigerator = ' . $refrigerator . ' AND ' ;
    $sql = $sql . 'washing_machine = ' . $washingMachine . ' AND ' ;
    $sql = $sql . 'pet = ' . $pet ;

    $result = mysqli_query($con,$sql);

    $dataResponse = [];

    //$row = mysqli_fetch_array($result);
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