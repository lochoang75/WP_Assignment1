<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="css/customControl.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		
		<link rel="stylesheet" type="text/css" href="css/listStyle.css">
		<script src="script/listJs.js"></script>
		<script src="script/listJs2.js"></script>
	<title>Vinhome Central Park</title>
	</head>
	<body>
		<div class="container-fluid no-gutters">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<a class="navbar-brand" href="../index/index.html"><img src="images/logo-BK.png" style="height:80px;" alt="Icon"></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
				</button>
				 <div class="collapse navbar-collapse" id="navbarSupportedContent">
					<form class="form-inline my-2 my-lg-0">
						 <input class="form-control mr-sm-2" type="search" placeholder="Tìm nhà tại quận bạn mong muốn" aria-label="Search" size="40">
						 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
					</form>
									
									<ul class="navbar-nav ml-auto ">
											<li class="nav-item">
													 <a class="nav-link" style="font-size:18px" href="../list/list.html" target="_self">Thuê</a>
											</li>
											<li class="nav-item">
													 <a class="nav-link" style="font-size:18px" href="#">Blog</a>
											</li>
											<li class="nav-item">
													 <a class="nav-link" style="font-size:18px" href="../listyourhouse/listyourhouse.html">Danh sách của bạn</a>
											</li>
											<li class="nav-item">
													 <a class="nav-link" style="font-size:18px" href="#">Việc làm</a>
											</li>
											<li class="nav-item dropdown">
													<a class="nav-link dropdown-toggle" style="font-size:18px" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ngôn ngữ</a>
													<div class="dropdown-menu" aria-labelledby="navbarDropdown" >
															<a class="dropdown-item" href="../list/list.html">Tiếng Việt</a>
															<a class="dropdown-item" href="../english/list/list.html">Tiếng Anh</a>
													</div>
											</li>
									</ul>
				</div>
					</nav>
			</div>
			
		<div id="divSearch" class="hidden-sm-down container-fluid ">
			<div class="row justify-content-around">

				<div id="divSearchProperties" class="col-md">
					<select id="idDropdownTypeOfHouse" class="custom-select custom-select">
						<option selected>House</option>
						<option value="Apartment">Apartment</option>
						<option value="Duplex">Duplex</option>
						<option value="Officetel">Officetel</option>
						<option value="Other">Other</option>
						<option value="ServiceApartment">Service Apartment</option>
						<option value="Studio">Studio</option>
						<option value="Townhouse">Townhouse</option>
						<option value="Villa">Villa</option>
					</select>
				</div>
				
				<div id="divSearchVinCentral" class="col-md">
					<select id="idDropdownTypeOfProject" class="custom-select custom-select">
						<option selected>Project</option>
						<option value="Masteri Thao Dien">Masteri Thao Dien</option>
						<option value="Nguyễn Phi Khanh Service Apartment">Nguyễn Phi Khanh Service Apartment</option>
						<option value="Cuu Long Serviced Apartment">Cuu Long Serviced Apartment</option>
						<option value="Lehome serviced apartment">Lehome serviced apartment</option>
						<option value="Lily Service Apartment">Lily Service Apartment</option>
						<option value="MH Serviced Apartment">MH Serviced Apartment</option>
						<option value="Nguyen Van Huong">Nguyen Van Huong</option>
						<option value="Phuc An Serviced Apartment">Phuc An Serviced Apartment</option>
					</select>
				</div>
				
				<div id="divSearchBed" class=" col-md ">
					<select id="idDropdownNumberBedroom" class="custom-select custom-select">
						<option selected>Bedroom</i></option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select>
				</div>
				
				<div id="divSearchBath" class=" col-md ">
					<select id="idDropdownNumberBathroom" class="custom-select custom-select">
						<option selected>Bathroom</i></option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select>
				</div>
				
				<div id="divSearchMin" class=" col-md ">
					<select id="idDropdownMinPrice" class="custom-select custom-select">
						<option selected>Min Price</i></option>
						<option value="400">400 $</option>
						<option value="500">500 $</option>
						<option value="600">600 $</option>
						<option value="700">700 $</option>
						<option value="800">800 $</option>
						<option value="900">900 $</option>
						<option value="1000">1000 $</option>
						<option value="2000">2000 $</option>
						<option value="3000">3000 $</option>
					</select>
				</div>
				
				<div id="divSearchMax" class=" col-md ">
					<select id="idDropdownMaxPrice" class="custom-select custom-select">
						<option selected>Max Price</i></option>
						<option value="500">500 $</option>
						<option value="600">600 $</option>
						<option value="700">700 $</option>
						<option value="800">800 $</option>
						<option value="900">900 $</option>
						<option value="1000">1000 $</option>
						<option value="2000">2000 $</option>
						<option value="3000">3000 $</option>
						<option value="5000">5000 $</option>
					</select>
				</div>
				
				<div id="divSearchMoreFilter" class=" col-md ">
					<div class="dropdown">
						<button type="button" class="btn btn-outline-secondary btn-block dropdown-toggle" data-toggle="collapse" data-target="#divCollapseSearch">
						   <i class="material-icons" style="font-size:18px;color:red">notifications</i> MORE FILTER
						</button>
					</div>
				</div>

			</div>

		</div>	
			
			
		<div id="divContent">
		
			<div id="divCollapseSearch" class="container-fluid collapse">
				
				<div class="d-flex justify-content-end">
					<i class="fa fa-close" id="iconClose" style="font-size:36px;color:red" onclick=""></i>
				</div>
				
				<h4 class="h3CollapseSearch">Basic Feature</h4>
			
				<div class="row justify-content-around">
				
					<div id="divCollapseSearchNumberPeopleCanLive" class="col-md-5 ">
						<select id="idDropdownNumberPeopleCanLive" class="custom-select custom-select">
							<option selected>Number People can live</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
					</div>
					
					<div id="divCollapseSearchFurnishment" class="col-md-5 ">
						<select id="idDropdownFurnishment" class="custom-select custom-select">
							<option selected>Furnishment</option>
							<option value="Noi that day du">Fully Furnishment</option>
							<option value="Noi that co ban">Semi Furnishment</option>
							<option value="khong co noi that">UnFurnishment</option>
	
						</select>
					</div>

				</div>
			
				<h4 class="h3CollapseSearch">Required Amenities</h4>
				
				<div id="divCollapseSearchRequired" class="row justify-content-start">
			
					<div id="divCollapseSearchTV" class="row justify-content-start">					
						<div class="col-md">
							<label class="switch">
							  <input id="idCheckBoxKitchen"  type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Kitchen
						</div>
					</div>
					
					<div id="divCollapseSearchMicrowave" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch ">
							  <input id="idCheckBoxGarden" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Garden
						</div>
					</div>
					
					<div id="divCollapseSearchAirConditioner" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch">
							  <input id="idCheckBoxWiFi" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Wi-Fi
						</div>
					</div>
				
					<div id="divCollapseSearchSmokeDetector" class="row justify-content-start">					
						<div  class="col-md">
							<label class="switch ">
							  <input id="idCheckBoxElectricity" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Electricity
						</div>
					</div>
					
					<div id="divCollapseSearchFireExtinguisher" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch ">
							  <input id="idCheckBoxWater" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Water
						</div>
					</div>
					
					<div id="divCollapseSearchBalcony" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch ">
							  <input id="idCheckBoxAirConditioner" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Air Conditioner
						</div>
					</div>
					
					<div id="divCollapseSearchBathtub" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch ">
							  <input id="idCheckBoxTV" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;TV
						</div>
					</div>
					
					<div id="divCollapseSearchGeyser" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch ">
							  <input id="idCheckBoxRefrigerator" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Refrigerator
						</div>
					</div>
					
					<div id="divCollapseSearchDishWasher" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch ">
							  <input  id="idCheckBoxWashingMachine" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Washing Machine
						</div>
					</div>
					
					<div id="divCollapseSearchElectricChimney" class="row justify-content-start">					
						<div  class="col-md ">
							<label class="switch ">
							  <input id="idCheckBoxPet" type="checkbox" class="primary">
							  <span class="slider round"></span>
							</label>
							&nbsp;Pet
						</div>
					</div>
					
					
				</div>
				<div id="divBtnApplyClearFilters" class="row">
					<button id="btnApply" type="button" class="btn btn-primary" onclick="applySearch()">
							  Apply
					</button>
					<button id="btnClearFilters" type="button" class="btn btn-light" onclick="applyClearFilter()">
							  Clear Filters
					</button>
				</div>
			</div>

			<h4 style="margin-top:20px">HOME FOR RENT</h4>
			

                    
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
                    
					$sqlFull = "SELECT COUNT" . "(" . "*" . ")" . "FROM info_house" ;
					
                    $resultFull = mysqli_query($con,$sqlFull);
                    $rowFull = mysqli_fetch_array($resultFull);
					
					$sql = "SELECT * FROM info_house limit 15" ;
                    $result = mysqli_query($con,$sql);
					
					//mo divSearchList 
                    echo '<div id="divSearchList" class="row">';
                        echo '<p id="pShowSort">Show 15 in <b>';
                        echo $rowFull[0];
                        echo ' Listing</b>';
                    echo '</div>'; // dong divSearchList 
					//mo div tong ket qua Search divImageSortResult co ca pagination
					echo '<div id="divImageSortResult" class=" ">';
						//mo divCardDeck con cua div tong
						echo '<div id="divCardDeck" class="card-deck">';

					while($row = mysqli_fetch_array($result)) {
							//mo div card my-3 border border-0
							echo '<div class="card my-3 border border-0">'; 
								//mo div divCarouselImageSort
								echo '<div id="divCarouselImageSort'; 
								echo $row['id_house'];
								echo '" class="carousel slide" data-ride="carousel" data-interval="0">';
									//mo ul class="carousel-indicators
									echo '<ul class="carousel-indicators">' ;
										//mo li 1 
										echo '<li data-target="#divCarouselImageSort' ;
										echo $row['id_house'];
										echo '" data-slide-to="0" class="active"></li>';
										//mo li 2
										echo '<li data-target="#divCarouselImageSort' ;
										echo $row['id_house'];
										echo '" data-slide-to="1"></li>';
										//mo li 3
										echo '<li data-target="#divCarouselImageSort' ;
										echo $row['id_house'];
										echo '" data-slide-to="2"></li>';
									echo '</ul>'; //dong ul carousel-indicators
									//mo div carousel-inner
									echo '<div class="carousel-inner">';
										//mo div carousel item 1 active
										echo '<div class="carousel-item active">';
											echo '<img src="';
											echo $row['image1'];
											echo '" alt="room1">';
										echo '</div>'; // dong div class="carousel-item active 1
										//mo div carousel item 2 
										echo '<div class="carousel-item">';
											echo '<img src="';
											echo $row['image2'];
											echo '" alt="room2">';
										echo '</div>'; // dong div class="carousel-item 2
										//mo div carousel item 3
										echo '<div class="carousel-item">';
											echo '<img src="';
											echo $row['image3'];
											echo '" alt="room3">';
										echo '</div>'; // dong div class="carousel-item 3
									echo '</div>'; // dong div carousel-inner
									//mo div card-img-overlay
									echo '<div class="card-img-overlay">';
										//mo div float-left Price
										echo '<div class="float-left">';
											echo '<p class="text-white">$ ';
											echo $row['price'];
											echo '</p>'; // dong p
										echo '</div>'; // dong div float-left Price
										//mo div Heart
										echo '<div class="d-flex justify-content-center">';
											echo '<i class="fa fa-heart-o" style="font-size:28px;color:white" onclick="changeToHeartFull(this)"></i>';
										echo '</div>'; // dong div Heart
									echo '</div>'; //dong div card-img-overlay
									// mo a nut prev
									echo '<a class="carousel-control-prev" href="#divCarouselImageSort';
									echo $row['id_house'];
									echo '" data-slide="prev">';
										//mo span nut prev
										echo '<span class="carousel-control-prev-icon"></span>';
									echo '</a>'; // dong a nut prev
									// mo a nut next
									echo '<a class="carousel-control-next" href="#divCarouselImageSort';
									echo $row['id_house'];
									echo '" data-slide="next">';
										//mo span nut next
										echo '<span class="carousel-control-next-icon"></span>';
									echo '</a>';//dong a nut next
								echo '</div>'; //dong div divCarouselImageSort
								//mo div class CardBody
								echo '<div class="card-body">';
									//mo div class col
									echo '<div class="col">';
										//mo a CardTitle
										echo '<a href="#" class="card-title">';
											//mo a truyen id sang trang detail
											echo '<a href="detail.php?id_house=';
											echo $row['id_house'];
											echo '"><p>Details House</p></a>';
										echo '</a>'; // dong a CardTitle
										//mo div row
										echo '<div class="row">';
											//mo i bedRoom
											echo '<i class="fa fa-bed">&nbsp; ';
											echo $row['bedroom'];
											echo ' bed &nbsp; </i>';// dong i bedRoom

											//mo i bathRoom
											echo '<i class="fa fa-bath">&nbsp; ';
											echo $row['bathroom'];
											echo ' bed &nbsp; </i>'; // dong i bathRoom
										echo '</div>'; // dong div row
									echo '</div>'; // dong div col
								echo '</div>'; // dong div cardbody
							echo '</div>'; // dong div <div class="card my-3 border border-0"> cua moi card

					}

						echo '</div>'; // div dong divCardDeck

					//Tạo Pagination
					if($rowFull[0] <= 15){
						echo '<div id="divPagination" class="d-flex justify-content-center">';
							echo '<ul class="pagination">';
								echo '<li>';
									echo'<a href="#">&lt;</a>';
								echo '/<li>';

								echo '<li class="active">';
									echo '<a class="text-white" href="#">1 ';
										echo '<span class="sr-only">(current)</span>';
									echo '</a>';
								echo '</li>';

								echo '<li>';
									echo'<a href="#">&gt;</a>';
								echo '/<li>';
							echo '</ul>';
						echo '</div>';
					}else if($rowFull[0] <= 30){
						echo '<div id="divPagination" class="d-flex justify-content-center">';
							echo '<ul class="pagination">';
								echo '<li>';
									echo'<a href="#">&lt;</a>';
								echo '/<li>';

								echo '<li class="active">';
									echo '<a class="text-white" href="#">1 ';
										echo '<span class="sr-only">(current)</span>';
									echo '</a>';
								echo '</li>';

								echo '<li>';
									echo'<a href="#">2</a>';
								echo '/<li>';

								echo '<li>';
									echo'<a href="#">&gt;</a>';
								echo '/<li>';
							echo '</ul>';
						echo '</div>';

					}else if($rowFull[0] <= 45) {
						echo '<div id="divPagination" class="d-flex justify-content-center">';
							echo '<ul class="pagination">';
								echo '<li>';
									echo'<a href="#">&lt;</a>';
								echo '/<li>';

								echo '<li class="active">';
									echo '<a class="text-white" href="#">1 ';
										echo '<span class="sr-only">(current)</span>';
									echo '</a>';
								echo '</li>';

								echo '<li>';
									echo'<a href="#">2</a>';
								echo '/<li>';

								echo '<li>';
									echo'<a href="#">3</a>';
								echo '/<li>';

								echo '<li>';
									echo'<a href="#">&gt;</a>';
								echo '/<li>';
							echo '</ul>';
						echo '</div>';
					}else{
						$lastPage = number_format($$rowFull[0] / 15);
						echo '<div id="divPagination" class="d-flex justify-content-center">';
							echo '<ul class="pagination">';
								echo '<li>';
									echo'<a href="#">&lt;</a>';
								echo '/<li>';

								echo '<li class="active">';
									echo '<a class="text-white" href="#">1 ';
										echo '<span class="sr-only">(current)</span>';
									echo '</a>';
								echo '</li>';

								echo '<li>';
									echo'<a href="#">2</a>';
								echo '/<li>';

								echo '<li>';
									echo'<a href="#">...</a>';
								echo '/<li>';

								echo '<li>';
									echo'<a href="#">';
									echo $lastPage;
									echo '</a>';
								echo '/<li>';

								echo '<li>';
									echo'<a href="#">&gt;</a>';
								echo '/<li>';
							echo '</ul>';
						echo '</div>';
					} // dong vong lap while

					echo '</div>';//dong div tong ket qua Search divImageSortResult co ca pagination
					
					mysqli_close($con);
				?>


			
			<div id="divFooterOfBody" class="col border-top">
				<p>Apartment for rent in Vinhomes Central Park List - We provide you 
				various choices of apartment for lease in Vinhomes Central Park, Binh Thanh District
				, Ho Chi Minh City, Vietnam. Long term rental - 6 month at least.</p>
			</div>
			
			

		</div>
		
		
		
		<div id="footer">
			<div class="page-footer blue pt-4">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<h3> <b>Vẫn đang kết nối</b> </h3>
							<p> Tham gia cộng đồng hơn 3000 người nhận được tư vấn, lời khuyên về thuê nhà và những hợp đồng thuê tốt nhất </p>
							<form>
								<div class="form-group">
										<input type="email" class="form-control" placeholder="Email của bạn">
								</div>
								<button type="submit" class="btn btn-primary">Gửi</button>
							</form>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<div>
								<h3> <b>Công Ty</b> </h3>
								<a href="../about/about.html" target="_self">Về chúng tôi</a>
								<br>
							</div>
							<div>
								<p></p>
								<h3> <b>Hỗ trợ</b> </h3>
								<a href="../contact/contact-us.html"> Liên hệ với chúng tôi </a>
							</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<h3> <b>Tuỳ chọn</b> </h3>
							<select class="form-control" name="Currency">
								<option value="US"> US Dollar </option>
								<option value="VND"> VND </option>
							</select>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
							<h3> <b>Dự án</b> </h3>
							<figure>
								<img src="images/fearture-list1.png" alt="Hình đại diện cho Feature Project Vinhomes">
							</figure>
							<div class="featured-list-text">
								<h4 class="one-line2">Vinhomes Central Park</h4>
								</div>
						</div>
				</div>
			</div>
		</div>	
	</body>
</html>
