var applySearch = function applySearch(){
	var typeOfHouse = document.getElementById("idDropdownTypeOfHouse").value;
	var typeOfProject = document.getElementById("idDropdownTypeOfProject").value;
	var numberBedroom = document.getElementById("idDropdownNumberBedroom").value;
	var numberBathroom = document.getElementById("idDropdownNumberBathroom").value;
	var minPrice = document.getElementById("idDropdownMinPrice").value;
	var maxPrice = document.getElementById("idDropdownMaxPrice").value;
	var numberPeopleCanLive = document.getElementById("idDropdownNumberPeopleCanLive").value;
	var furnishment = document.getElementById("idDropdownFurnishment").value;

	var kitchen = document.getElementById("idCheckBoxKitchen").checked;
	var garden = document.getElementById("idCheckBoxGarden").checked;
	var wifi = document.getElementById("idCheckBoxWiFi").checked;
	var electricity = document.getElementById("idCheckBoxElectricity").checked;
	var water = document.getElementById("idCheckBoxWater").checked;
	var airConditioner = document.getElementById("idCheckBoxAirConditioner").checked;
	var tv = document.getElementById("idCheckBoxTV").checked;
	var refrigerator = document.getElementById("idCheckBoxRefrigerator").checked;
	var washingMachine = document.getElementById("idCheckBoxWashingMachine").checked;
	var pet = document.getElementById("idCheckBoxPet").checked;

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	$.ajax({
		type: "GET",
		url:  "listSearch.php",
		data: {
			'typeOfHouse': typeOfHouse,
			'typeOfProject': typeOfProject,
			'numberBedroom': numberBedroom,
			'numberBathroom': numberBathroom,
			'minPrice': minPrice,
			'maxPrice': maxPrice,
			'numberPeopleCanLive': numberPeopleCanLive,
			'furnishment': furnishment,
			'kitchen': kitchen,
			'garden': garden,
			'wifi': wifi,
			'electricity': electricity,
			'water': water,
			'airConditioner': airConditioner,
			'tv': tv,
			'refrigerator': refrigerator,
			'washingMachine': washingMachine,
			'pet': pet,

		},
		success: function(dataResponse){
			//lấy id content cha
			var divContent = document.getElementById("divContent");
			//xóa các kết quả củ
			var divSearchList = document.getElementById("divSearchList");
			var divImageSortResult = document.getElementById("divImageSortResult");
			divContent.removeChild(divSearchList);
			divContent.removeChild(divImageSortResult);
			//parse Json vào Object
			var houseResult = JSON.parse(dataResponse);
			//Tạo các Element con 
			//Tạo Div Result so ket qua
			var divSearchList = document.createElement("div");
			divSearchList.setAttribute("id", "divSearchList");
			
			var textNodePResult = "";
			if(houseResult.length < 15){
				textNodePResult = "Show " + houseResult.length + " in " + houseResult.length + " Listings" 
			}else {
				textNodePResult = "Show 15 in "  + houseResult.length + " Listings" 
			}
			//Tao p con cua div Result so ket qua
			//tao content p truoc sau do lay b boc ngoai p roi lay p boc ngoai b roi lay div boc ngoai p
			var pResultNumber = document.createElement("p");
			var textNodeP = document.createTextNode(textNodePResult);
			var bResultNumber = document.createElement("b");
			bResultNumber.appendChild(textNodeP);
			pResultNumber.appendChild(bResultNumber);
			divSearchList.appendChild(pResultNumber);
			var divFooterOfBody = document.getElementById("divFooterOfBody");

			divContent.insertBefore(divSearchList, divFooterOfBody);

			//Tao div ngoai id="divImageSortResult" va div trong  class="card-deck"
			var divImageSortResult = document.createElement("div");
			divImageSortResult.setAttribute("id", "divImageSortResult");
			//Tao div trong div class="card-deck"
			var divCardDeck = document.createElement("div");
			divCardDeck.setAttribute("class", "card-deck");
			//lat ra ngoai lay div class="card-deck" appandChild truoc roi moi lay 
			//divImageSortResult appendChild div class="card-deck"
			if(houseResult.length < 15 ){
				for(var i=0;i < houseResult.length;i++){
					//Tao div cha Single Card , div cha nay co 2 con la card hinh va card body
					var divSingleCard = document.createElement("div");
					divSingleCard.setAttribute("class", "card my-3 border border-0");
						//Tao Card hinh
						//Tao div chinh card hinh
						//Div nay co 5 con là 1 cái ul , 2 cái div và 2 cái a
						//Tạo div card chính trước
						var divCarouselImageSort = document.createElement("div");
						var idDivCarouselImageSort = "divCarouselImageSort";
						idDivCarouselImageSort += houseResult[i].id_house;
						divCarouselImageSort.setAttribute("id", idDivCarouselImageSort);
						divCarouselImageSort.setAttribute("class", "carousel slide");
						divCarouselImageSort.setAttribute("data-ride", "carousel");
						divCarouselImageSort.setAttribute("data-interval", "0");
							//Tạo con thứ 1 ul
							//Ul nay có 3 con li
							var ulCarouselIndicators = document.createElement("ul");
							ulCarouselIndicators.setAttribute("class", "carousel-indicators");
								//Tạo 3 con li của ul
								//Tạo con li thứ 1
								var liCarouselIndicators1 = document.createElement("li");
								liCarouselIndicators1.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators1.setAttribute("data-slide-to", "0");
								liCarouselIndicators1.setAttribute("class", "active");
								//Tạo con li thứ 2
								var liCarouselIndicators2 = document.createElement("li");
								liCarouselIndicators2.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators2.setAttribute("data-slide-to", "1");
								//Tạo con li thứ 3
								var liCarouselIndicators3 = document.createElement("li");
								liCarouselIndicators3.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators3.setAttribute("data-slide-to", "2");
								//Tạo con li thứ 4 nếu image4 không rỗng
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var liCarouselIndicators4 = document.createElement("li");
									liCarouselIndicators4.setAttribute("data-target", idDivCarouselImageSort);
									liCarouselIndicators4.setAttribute("data-slide-to", "3");
								}
							//ul AppendChild 3 con li nếu có con thứ 4 thì append
							ulCarouselIndicators.appendChild(liCarouselIndicators1);
							ulCarouselIndicators.appendChild(liCarouselIndicators2);
							ulCarouselIndicators.appendChild(liCarouselIndicators3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								ulCarouselIndicators.appendChild(liCarouselIndicators4);
							}
							//Tạo con thứ 2 div carousel-inner có 3 con 3 cái div carousel-item
							var divCarouselInner = document.createElement("div");
							divCarouselInner.setAttribute("class", "carousel-inner");
								//Tạo con thứ 1 carousel-item active
								var divCarouselItem1 = document.createElement("div");
								divCarouselItem1.setAttribute("class", "carousel-item active");	
									//Tạo con image 1
									var img1 = document.createElement("img");
									img1.setAttribute("src", houseResult[i].image1);
								//carousel-item 1 appendChild Image1
								divCarouselItem1.appendChild(img1);

								//Tạo con thứ 2 carousel-item
								var divCarouselItem2 = document.createElement("div");
								divCarouselItem2.setAttribute("class", "carousel-item");	
									//Tạo con image 2
									var img2 = document.createElement("img");
									img2.setAttribute("src", houseResult[i].image2);
								//carousel-item 2 appendChild Image2
								divCarouselItem2.appendChild(img2);
								
								//Tạo con thứ 3 carousel-item
								var divCarouselItem3 = document.createElement("div");
								divCarouselItem3.setAttribute("class", "carousel-item");
									//Tạo con image 3
									var img3 = document.createElement("img");
									img3.setAttribute("src", houseResult[i].image3);
								//carousel-item 3 appendChild Image3
								divCarouselItem3.appendChild(img3);

								//Nếu image4 khác rỗng ta tạo thêm con thứ 4 carousel-item
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var divCarouselItem4 = document.createElement("div");
									divCarouselItem4.setAttribute("class", "carousel-item");
										//Tạo con image 4
										var img4 = document.createElement("img");
										img4.setAttribute("src", houseResult[i].image4);
									//carousel-item 4 appendChild Image4
									divCarouselItem4.appendChild(img4);
								}
							//div carousel-inner AppendChild 3 div con carousel-item nếu có con thứ 4 thì append
							divCarouselInner.appendChild(divCarouselItem1);
							divCarouselInner.appendChild(divCarouselItem2);
							divCarouselInner.appendChild(divCarouselItem3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								divCarouselInner.appendChild(divCarouselItem4);
							}

							//Tạo con thứ 3 div card-img-overlay có 2 con div 
							var divCardImgOverlay = document.createElement("div");
							divCardImgOverlay.setAttribute("class", "card-img-overlay");
								//Tạo div con thứ 1 giá tiền
								var divPrice = document.createElement("div");
								divPrice.setAttribute("class", "float-left text-uppercase");
									//Tạo con p
									var divPriceP = document.createElement("p");
									divPriceP.setAttribute("class", "text-white");						
									var textNodePriceP = document.createTextNode("$ " + houseResult[i].price);
									divPriceP.appendChild(textNodePriceP);			
								//div gia tiền appendChild con p
								divPrice.appendChild(divPriceP);	

								//Tạo div con thứ 2 trái tim
								var divHeart = document.createElement("div");
								divHeart.setAttribute("class", "d-flex justify-content-center");
									//Tạo con i
									var iHeart = document.createElement("i");
									iHeart.setAttribute("class", "fa fa-heart-o");
									iHeart.setAttribute("style", "font-size:28px;color:white");
									iHeart.setAttribute("onclick", "changeToHeartFull(this)");
								//div trái tim appendChild con i
								divHeart.appendChild(iHeart);

							//divCardImgOverlay appendChild 2 div con Price và Heart
							divCardImgOverlay.appendChild(divPrice);
							divCardImgOverlay.appendChild(divHeart);

							//Tạo con thứ 4 a carousel-control-prev
							var aCarouselControlPrev = document.createElement("a");
							aCarouselControlPrev.setAttribute("class", "carousel-control-prev");
							aCarouselControlPrev.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlPrev.setAttribute("data-slide", "prev");
								//Tạo con span prev
								var spanCarouselControlPrev = document.createElement("span");
								spanCarouselControlPrev.setAttribute("class", "carousel-control-prev-icon");

							//carousel-control-prev appendChild con span prev
							aCarouselControlPrev.appendChild(spanCarouselControlPrev);
							
							//Tạo con thứ 5 a carousel-control-next
							var aCarouselControlNext = document.createElement("a");
							aCarouselControlNext.setAttribute("class", "carousel-control-next");
							aCarouselControlNext.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlNext.setAttribute("data-slide", "next");
								//Tạo con span next
								var spanCarouselControlNext = document.createElement("span");
								spanCarouselControlNext.setAttribute("class", "carousel-control-next-icon");
							//carousel-control-next appendChild con span next
							aCarouselControlNext.appendChild(spanCarouselControlNext);

						//divCarouselImageSort appendChild 5 con này ulCarouselIndicators, carouse inner
						//carrouse img overlay , a prev , a next
						divCarouselImageSort.appendChild(ulCarouselIndicators);
						divCarouselImageSort.appendChild(divCarouselInner);
						divCarouselImageSort.appendChild(divCardImgOverlay);
						divCarouselImageSort.appendChild(aCarouselControlPrev);
						divCarouselImageSort.appendChild(aCarouselControlNext);

						//Tao Card body có 1 con la 1 div Col
						var divCardBody = document.createElement("div");
						divCardBody.setAttribute("class", "card-body");
							//Tạo div Col có 2 con là 2 div a và 1 div row
							var divCardBodyCol = document.createElement("div");
							divCardBodyCol.setAttribute("class", "col");
								//Tạo con thứ 1 a CardBodyTitle
								var aCardBodyTitle = document.createElement("a");
								aCardBodyTitle.setAttribute("href", "detail.php?id_house=" + houseResult[i].id_house);
								aCardBodyTitle.setAttribute("class", "card-title");
									//Tạo con p của a
									var pCardBodyTitle = document.createElement("p");
									var textCardBodyTitleP = document.createTextNode("Details House");
									pCardBodyTitle.appendChild(textCardBodyTitleP);
								//a appendChild p
								aCardBodyTitle.appendChild(pCardBodyTitle);
								
								//Tạo con thứ 2 div row có 2 con i
								var divCardBodyRow = document.createElement("div");
								divCardBodyRow.setAttribute("class", "row");
									//Tạo con i thứ 1 bed
									var iCardBodyRowContentBedRoom = document.createElement("i");
									iCardBodyRowContentBedRoom.setAttribute("class", "fa fa-bed");
									var iCardBodyRowContentBedRoomP = document.createTextNode("  " + houseResult[i].numberBedroom );
									iCardBodyRowContentBedRoom.appendChild(iCardBodyRowContentBedRoomP);
									//Tạo con i thứ 2 bath
									var iCardBodyRowContentBathRoom = document.createElement("i");
									iCardBodyRowContentBathRoom.setAttribute("class", "fa fa-bath");
									var iCardBodyRowContentBathRoomP = document.createTextNode("  " + houseResult[i].numberBathroom );
									iCardBodyRowContentBathRoom.appendChild(iCardBodyRowContentBathRoomP);
								//div row appendChild 2 con i Bedroom và Bathroom		 
								divCardBodyRow.appendChild(iCardBodyRowContentBedRoom);
								divCardBodyRow.appendChild(iCardBodyRowContentBathRoom);
							//div Col appendChild 2 con a CardBodyTitle va divCardBodyRow
							divCardBodyCol.appendChild(aCardBodyTitle);
							divCardBodyCol.appendChild(divCardBodyRow);
						//div Card body appendChild div Col
						divCardBody.appendChild(divCardBodyCol);
					//divSingleCard appendChild div divCarouselImageSort và  divCardBody
					divSingleCard.appendChild(divCarouselImageSort);
					divSingleCard.appendChild(divCardBody);
				//DivCardDeck appendChild divSingleCard 
				divCardDeck.appendChild(divSingleCard);
				} //Kết thúc vòng lặp for result < 15
			} else {
				for(var i=0;i < 15;i++){
					//Tao div cha Single Card , div cha nay co 2 con la card hinh va card body
					var divSingleCard = document.createElement("div");
					divSingleCard.setAttribute("class", "card my-3 border border-0");
						//Tao Card hinh
						//Tao div chinh card hinh
						//Div nay co 5 con là 1 cái ul , 2 cái div và 2 cái a
						//Tạo div card chính trước
						var divCarouselImageSort = document.createElement("div");
						var idDivCarouselImageSort = "divCarouselImageSort";
						idDivCarouselImageSort += houseResult[i].id_house;
						divCarouselImageSort.setAttribute("id", idDivCarouselImageSort);
						divCarouselImageSort.setAttribute("class", "carousel slide");
						divCarouselImageSort.setAttribute("data-ride", "carousel");
						divCarouselImageSort.setAttribute("data-interval", "0");
							//Tạo con thứ 1 ul
							//Ul nay có 3 con li
							var ulCarouselIndicators = document.createElement("ul");
							ulCarouselIndicators.setAttribute("class", "carousel-indicators");
								//Tạo 3 con li của ul
								//Tạo con li thứ 1
								var liCarouselIndicators1 = document.createElement("li");
								liCarouselIndicators1.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators1.setAttribute("data-slide-to", "0");
								liCarouselIndicators1.setAttribute("class", "active");
								//Tạo con li thứ 2
								var liCarouselIndicators2 = document.createElement("li");
								liCarouselIndicators2.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators2.setAttribute("data-slide-to", "1");
								//Tạo con li thứ 3
								var liCarouselIndicators3 = document.createElement("li");
								liCarouselIndicators3.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators3.setAttribute("data-slide-to", "2");
								//Tạo con li thứ 4 nếu image4 không rỗng
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var liCarouselIndicators4 = document.createElement("li");
									liCarouselIndicators4.setAttribute("data-target", idDivCarouselImageSort);
									liCarouselIndicators4.setAttribute("data-slide-to", "3");
								}
							//ul AppendChild 3 con li nếu có con thứ 4 thì append
							ulCarouselIndicators.appendChild(liCarouselIndicators1);
							ulCarouselIndicators.appendChild(liCarouselIndicators2);
							ulCarouselIndicators.appendChild(liCarouselIndicators3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								ulCarouselIndicators.appendChild(liCarouselIndicators4);
							}
							//Tạo con thứ 2 div carousel-inner có 3 con 3 cái div carousel-item
							var divCarouselInner = document.createElement("div");
							divCarouselInner.setAttribute("class", "carousel-inner");
								//Tạo con thứ 1 carousel-item active
								var divCarouselItem1 = document.createElement("div");
								divCarouselItem1.setAttribute("class", "carousel-item active");	
									//Tạo con image 1
									var img1 = document.createElement("img");
									img1.setAttribute("src", houseResult[i].image1);
								//carousel-item 1 appendChild Image1
								divCarouselItem1.appendChild(img1);

								//Tạo con thứ 2 carousel-item
								var divCarouselItem2 = document.createElement("div");
								divCarouselItem2.setAttribute("class", "carousel-item");	
									//Tạo con image 2
									var img2 = document.createElement("img");
									img2.setAttribute("src", houseResult[i].image2);
								//carousel-item 2 appendChild Image2
								divCarouselItem2.appendChild(img2);
								
								//Tạo con thứ 3 carousel-item
								var divCarouselItem3 = document.createElement("div");
								divCarouselItem3.setAttribute("class", "carousel-item");
									//Tạo con image 3
									var img3 = document.createElement("img");
									img3.setAttribute("src", houseResult[i].image3);
								//carousel-item 3 appendChild Image3
								divCarouselItem3.appendChild(img3);

								//Nếu image4 khác rỗng ta tạo thêm con thứ 4 carousel-item
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var divCarouselItem4 = document.createElement("div");
									divCarouselItem4.setAttribute("class", "carousel-item");
										//Tạo con image 4
										var img4 = document.createElement("img");
										img4.setAttribute("src", houseResult[i].image4);
									//carousel-item 4 appendChild Image4
									divCarouselItem4.appendChild(img4);
								}
							//div carousel-inner AppendChild 3 div con carousel-item nếu có con thứ 4 thì append
							divCarouselInner.appendChild(divCarouselItem1);
							divCarouselInner.appendChild(divCarouselItem2);
							divCarouselInner.appendChild(divCarouselItem3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								divCarouselInner.appendChild(divCarouselItem4);
							}

							//Tạo con thứ 3 div card-img-overlay có 2 con div 
							var divCardImgOverlay = document.createElement("div");
							divCardImgOverlay.setAttribute("class", "card-img-overlay");
								//Tạo div con thứ 1 giá tiền
								var divPrice = document.createElement("div");
								divPrice.setAttribute("class", "float-left text-uppercase");
									//Tạo con p
									var divPriceP = document.createElement("p");
									divPriceP.setAttribute("class", "text-white");
									var textNodePriceP = document.createTextNode("$ " + houseResult[i].price);
									divPriceP.appendChild(textNodePriceP);			
								//div gia tiền appendChild con p
								divPrice.appendChild(divPriceP);	

								//Tạo div con thứ 2 trái tim
								var divHeart = document.createElement("div");
								divHeart.setAttribute("class", "d-flex justify-content-center");
									//Tạo con i
									var iHeart = document.createElement("i");
									iHeart.setAttribute("class", "fa fa-heart-o");
									iHeart.setAttribute("style", "font-size:28px;color:white");
									iHeart.setAttribute("onclick", "changeToHeartFull(this)");
								//div trái tim appendChild con i
								divHeart.appendChild(iHeart);

							//divCardImgOverlay appendChild 2 div con Price và Heart
							divCardImgOverlay.appendChild(divPrice);
							divCardImgOverlay.appendChild(divHeart);

							//Tạo con thứ 4 a carousel-control-prev
							var aCarouselControlPrev = document.createElement("a");
							aCarouselControlPrev.setAttribute("class", "carousel-control-prev");
							aCarouselControlPrev.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlPrev.setAttribute("data-slide", "prev");
								//Tạo con span prev
								var spanCarouselControlPrev = document.createElement("span");
								spanCarouselControlPrev.setAttribute("class", "carousel-control-prev-icon");

							//carousel-control-prev appendChild con span prev
							aCarouselControlPrev.appendChild(spanCarouselControlPrev);
							
							//Tạo con thứ 5 a carousel-control-next
							var aCarouselControlNext = document.createElement("a");
							aCarouselControlNext.setAttribute("class", "carousel-control-next");
							aCarouselControlNext.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlNext.setAttribute("data-slide", "next");
								//Tạo con span next
								var spanCarouselControlNext = document.createElement("span");
								spanCarouselControlNext.setAttribute("class", "carousel-control-next-icon");
							//carousel-control-next appendChild con span next
							aCarouselControlNext.appendChild(spanCarouselControlNext);

						//divCarouselImageSort appendChild 5 con này ulCarouselIndicators, carouse inner
						//carrouse img overlay , a prev , a next
						divCarouselImageSort.appendChild(ulCarouselIndicators);
						divCarouselImageSort.appendChild(divCarouselInner);
						divCarouselImageSort.appendChild(divCardImgOverlay);
						divCarouselImageSort.appendChild(aCarouselControlPrev);
						divCarouselImageSort.appendChild(aCarouselControlNext);

						//Tao Card body có 1 con la 1 div Col
						var divCardBody = document.createElement("div");
						divCardBody.setAttribute("class", "card-body");
							//Tạo div Col có 2 con là 2 div a và 1 div row
							var divCardBodyCol = document.createElement("div");
							divCardBodyCol.setAttribute("class", "col");
								//Tạo con thứ 1 a CardBodyTitle
								var aCardBodyTitle = document.createElement("a");
								aCardBodyTitle.setAttribute("href", "detail.php?id_house=" + houseResult[i].id_house);
								aCardBodyTitle.setAttribute("class", "card-title");
									//Tạo con p của a
									var pCardBodyTitle = document.createElement("p");
									var textCardBodyTitleP = document.createTextNode("Details House");
									pCardBodyTitle.appendChild(textCardBodyTitleP);
								//a appendChild p
								aCardBodyTitle.appendChild(pCardBodyTitle);
								
								//Tạo con thứ 2 div row có 2 con i
								var divCardBodyRow = document.createElement("div");
								divCardBodyRow.setAttribute("class", "row");
									//Tạo con i thứ 1 bed
									var iCardBodyRowContentBedRoom = document.createElement("i");
									iCardBodyRowContentBedRoom.setAttribute("class", "fa fa-bed");
									var iCardBodyRowContentBedRoomP = document.createTextNode("  " + houseResult[i].numberBedroom );
									iCardBodyRowContentBedRoom.appendChild(iCardBodyRowContentBedRoomP);
									//Tạo con i thứ 2 bath
									var iCardBodyRowContentBathRoom = document.createElement("i");
									iCardBodyRowContentBathRoom.setAttribute("class", "fa fa-bath");
									var iCardBodyRowContentBathRoomP = document.createTextNode("  " + houseResult[i].numberBathroom );
									iCardBodyRowContentBathRoom.appendChild(iCardBodyRowContentBathRoomP);
								//div row appendChild 2 con i Bedroom và Bathroom		 
								divCardBodyRow.appendChild(iCardBodyRowContentBedRoom);
								divCardBodyRow.appendChild(iCardBodyRowContentBathRoom);
							//div Col appendChild 2 con a CardBodyTitle va divCardBodyRow
							divCardBodyCol.appendChild(aCardBodyTitle);
							divCardBodyCol.appendChild(divCardBodyRow);
						//div Card body appendChild div Col
						divCardBody.appendChild(divCardBodyCol);
					//divSingleCard appendChild div divCarouselImageSort và  divCardBody
					divSingleCard.appendChild(divCarouselImageSort);
					divSingleCard.appendChild(divCardBody);

				//DivCardDeck appendChild divSingleCard 
				divCardDeck.appendChild(divSingleCard);

				}//Kết thúc vòng lặp for result >= 15 chỉ lấy 15 cái thôi
			}// kết thúc else
			
			//sau khi làm xong thì divImageSortResult appendChild divCardDeck
			divImageSortResult.appendChild(divCardDeck);
			//div ngoai divContent appendChild divImageSortResult
			divContent.insertBefore(divImageSortResult, divFooterOfBody);

		} // end sucecess function
	}); // end Ajax
	
}

var applyClearFilter = function applyClearFilter(){

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	$.ajax({
		type: "GET",
		url:  "listClearFilter.php",
		data: {
			
		},
		success: function(dataResponse){
			//lấy id content cha
			var divContent = document.getElementById("divContent");
			//xóa các kết quả củ
			var divSearchList = document.getElementById("divSearchList");
			var divImageSortResult = document.getElementById("divImageSortResult");
			divContent.removeChild(divSearchList);
			divContent.removeChild(divImageSortResult);
			//parse Json vào Object
			var houseResult = JSON.parse(dataResponse);
			//Tạo các Element con 
			//Tạo Div Result so ket qua
			var divSearchList = document.createElement("div");
			divSearchList.setAttribute("id", "divSearchList");
			
			var textNodePResult = "";
			if(houseResult.length < 15){
				textNodePResult = "Show " + houseResult.length + " in " + houseResult.length + " Listings" 
			}else {
				textNodePResult = "Show 15 in "  + houseResult.length + " Listings" 
			}
			//Tao p con cua div Result so ket qua
			//tao content p truoc sau do lay b boc ngoai p roi lay p boc ngoai b roi lay div boc ngoai p
			var pResultNumber = document.createElement("p");
			var textNodeP = document.createTextNode(textNodePResult);
			var bResultNumber = document.createElement("b");
			bResultNumber.appendChild(textNodeP);
			pResultNumber.appendChild(bResultNumber);
			divSearchList.appendChild(pResultNumber);
			var divFooterOfBody = document.getElementById("divFooterOfBody");

			divContent.insertBefore(divSearchList, divFooterOfBody);

			//Tao div ngoai id="divImageSortResult" va div trong  class="card-deck"
			var divImageSortResult = document.createElement("div");
			divImageSortResult.setAttribute("id", "divImageSortResult");
			//Tao div trong div class="card-deck"
			var divCardDeck = document.createElement("div");
			divCardDeck.setAttribute("class", "card-deck");
			//lat ra ngoai lay div class="card-deck" appandChild truoc roi moi lay 
			//divImageSortResult appendChild div class="card-deck"
			if(houseResult.length < 15 ){
				for(var i=0;i < houseResult.length;i++){
					//Tao div cha Single Card , div cha nay co 2 con la card hinh va card body
					var divSingleCard = document.createElement("div");
					divSingleCard.setAttribute("class", "card my-3 border border-0");
						//Tao Card hinh
						//Tao div chinh card hinh
						//Div nay co 5 con là 1 cái ul , 2 cái div và 2 cái a
						//Tạo div card chính trước
						var divCarouselImageSort = document.createElement("div");
						var idDivCarouselImageSort = "divCarouselImageSort";
						idDivCarouselImageSort += houseResult[i].id_house;
						divCarouselImageSort.setAttribute("id", idDivCarouselImageSort);
						divCarouselImageSort.setAttribute("class", "carousel slide");
						divCarouselImageSort.setAttribute("data-ride", "carousel");
						divCarouselImageSort.setAttribute("data-interval", "0");
							//Tạo con thứ 1 ul
							//Ul nay có 3 con li
							var ulCarouselIndicators = document.createElement("ul");
							ulCarouselIndicators.setAttribute("class", "carousel-indicators");
								//Tạo 3 con li của ul
								//Tạo con li thứ 1
								var liCarouselIndicators1 = document.createElement("li");
								liCarouselIndicators1.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators1.setAttribute("data-slide-to", "0");
								liCarouselIndicators1.setAttribute("class", "active");
								//Tạo con li thứ 2
								var liCarouselIndicators2 = document.createElement("li");
								liCarouselIndicators2.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators2.setAttribute("data-slide-to", "1");
								//Tạo con li thứ 3
								var liCarouselIndicators3 = document.createElement("li");
								liCarouselIndicators3.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators3.setAttribute("data-slide-to", "2");
								//Tạo con li thứ 4 nếu image4 không rỗng
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var liCarouselIndicators4 = document.createElement("li");
									liCarouselIndicators4.setAttribute("data-target", idDivCarouselImageSort);
									liCarouselIndicators4.setAttribute("data-slide-to", "3");
								}
							//ul AppendChild 3 con li nếu có con thứ 4 thì append
							ulCarouselIndicators.appendChild(liCarouselIndicators1);
							ulCarouselIndicators.appendChild(liCarouselIndicators2);
							ulCarouselIndicators.appendChild(liCarouselIndicators3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								ulCarouselIndicators.appendChild(liCarouselIndicators4);
							}
							//Tạo con thứ 2 div carousel-inner có 3 con 3 cái div carousel-item
							var divCarouselInner = document.createElement("div");
							divCarouselInner.setAttribute("class", "carousel-inner");
								//Tạo con thứ 1 carousel-item active
								var divCarouselItem1 = document.createElement("div");
								divCarouselItem1.setAttribute("class", "carousel-item active");	
									//Tạo con image 1
									var img1 = document.createElement("img");
									img1.setAttribute("src", houseResult[i].image1);
								//carousel-item 1 appendChild Image1
								divCarouselItem1.appendChild(img1);

								//Tạo con thứ 2 carousel-item
								var divCarouselItem2 = document.createElement("div");
								divCarouselItem2.setAttribute("class", "carousel-item");	
									//Tạo con image 2
									var img2 = document.createElement("img");
									img2.setAttribute("src", houseResult[i].image2);
								//carousel-item 2 appendChild Image2
								divCarouselItem2.appendChild(img2);
								
								//Tạo con thứ 3 carousel-item
								var divCarouselItem3 = document.createElement("div");
								divCarouselItem3.setAttribute("class", "carousel-item");
									//Tạo con image 3
									var img3 = document.createElement("img");
									img3.setAttribute("src", houseResult[i].image3);
								//carousel-item 3 appendChild Image3
								divCarouselItem3.appendChild(img3);

								//Nếu image4 khác rỗng ta tạo thêm con thứ 4 carousel-item
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var divCarouselItem4 = document.createElement("div");
									divCarouselItem4.setAttribute("class", "carousel-item");
										//Tạo con image 4
										var img4 = document.createElement("img");
										img4.setAttribute("src", houseResult[i].image4);
									//carousel-item 4 appendChild Image4
									divCarouselItem4.appendChild(img4);
								}
							//div carousel-inner AppendChild 3 div con carousel-item nếu có con thứ 4 thì append
							divCarouselInner.appendChild(divCarouselItem1);
							divCarouselInner.appendChild(divCarouselItem2);
							divCarouselInner.appendChild(divCarouselItem3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								divCarouselInner.appendChild(divCarouselItem4);
							}

							//Tạo con thứ 3 div card-img-overlay có 2 con div 
							var divCardImgOverlay = document.createElement("div");
							divCardImgOverlay.setAttribute("class", "card-img-overlay");
								//Tạo div con thứ 1 giá tiền
								var divPrice = document.createElement("div");
								divPrice.setAttribute("class", "float-left text-uppercase");
									//Tạo con p
									var divPriceP = document.createElement("p");
									divPriceP.setAttribute("class", "text-white");						
									var textNodePriceP = document.createTextNode("$ " + houseResult[i].price);
									divPriceP.appendChild(textNodePriceP);			
								//div gia tiền appendChild con p
								divPrice.appendChild(divPriceP);	

								//Tạo div con thứ 2 trái tim
								var divHeart = document.createElement("div");
								divHeart.setAttribute("class", "d-flex justify-content-center");
									//Tạo con i
									var iHeart = document.createElement("i");
									iHeart.setAttribute("class", "fa fa-heart-o");
									iHeart.setAttribute("style", "font-size:28px;color:white");
									iHeart.setAttribute("onclick", "changeToHeartFull(this)");
								//div trái tim appendChild con i
								divHeart.appendChild(iHeart);

							//divCardImgOverlay appendChild 2 div con Price và Heart
							divCardImgOverlay.appendChild(divPrice);
							divCardImgOverlay.appendChild(divHeart);

							//Tạo con thứ 4 a carousel-control-prev
							var aCarouselControlPrev = document.createElement("a");
							aCarouselControlPrev.setAttribute("class", "carousel-control-prev");
							aCarouselControlPrev.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlPrev.setAttribute("data-slide", "prev");
								//Tạo con span prev
								var spanCarouselControlPrev = document.createElement("span");
								spanCarouselControlPrev.setAttribute("class", "carousel-control-prev-icon");

							//carousel-control-prev appendChild con span prev
							aCarouselControlPrev.appendChild(spanCarouselControlPrev);
							
							//Tạo con thứ 5 a carousel-control-next
							var aCarouselControlNext = document.createElement("a");
							aCarouselControlNext.setAttribute("class", "carousel-control-next");
							aCarouselControlNext.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlNext.setAttribute("data-slide", "next");
								//Tạo con span next
								var spanCarouselControlNext = document.createElement("span");
								spanCarouselControlNext.setAttribute("class", "carousel-control-next-icon");
							//carousel-control-next appendChild con span next
							aCarouselControlNext.appendChild(spanCarouselControlNext);

						//divCarouselImageSort appendChild 5 con này ulCarouselIndicators, carouse inner
						//carrouse img overlay , a prev , a next
						divCarouselImageSort.appendChild(ulCarouselIndicators);
						divCarouselImageSort.appendChild(divCarouselInner);
						divCarouselImageSort.appendChild(divCardImgOverlay);
						divCarouselImageSort.appendChild(aCarouselControlPrev);
						divCarouselImageSort.appendChild(aCarouselControlNext);

						//Tao Card body có 1 con la 1 div Col
						var divCardBody = document.createElement("div");
						divCardBody.setAttribute("class", "card-body");
							//Tạo div Col có 2 con là 2 div a và 1 div row
							var divCardBodyCol = document.createElement("div");
							divCardBodyCol.setAttribute("class", "col");
								//Tạo con thứ 1 a CardBodyTitle
								var aCardBodyTitle = document.createElement("a");
								aCardBodyTitle.setAttribute("href", "detail.php?id_house=" + houseResult[i].id_house);
								aCardBodyTitle.setAttribute("class", "card-title");
									//Tạo con p của a
									var pCardBodyTitle = document.createElement("p");
									var textCardBodyTitleP = document.createTextNode("Details House");
									pCardBodyTitle.appendChild(textCardBodyTitleP);
								//a appendChild p
								aCardBodyTitle.appendChild(pCardBodyTitle);
								
								//Tạo con thứ 2 div row có 2 con i
								var divCardBodyRow = document.createElement("div");
								divCardBodyRow.setAttribute("class", "row");
									//Tạo con i thứ 1 bed
									var iCardBodyRowContentBedRoom = document.createElement("i");
									iCardBodyRowContentBedRoom.setAttribute("class", "fa fa-bed");
									var iCardBodyRowContentBedRoomP = document.createTextNode("  " + houseResult[i].numberBedroom );
									iCardBodyRowContentBedRoom.appendChild(iCardBodyRowContentBedRoomP);
									//Tạo con i thứ 2 bath
									var iCardBodyRowContentBathRoom = document.createElement("i");
									iCardBodyRowContentBathRoom.setAttribute("class", "fa fa-bath");
									var iCardBodyRowContentBathRoomP = document.createTextNode("  " + houseResult[i].numberBathroom );
									iCardBodyRowContentBathRoom.appendChild(iCardBodyRowContentBathRoomP);
								//div row appendChild 2 con i Bedroom và Bathroom		 
								divCardBodyRow.appendChild(iCardBodyRowContentBedRoom);
								divCardBodyRow.appendChild(iCardBodyRowContentBathRoom);
							//div Col appendChild 2 con a CardBodyTitle va divCardBodyRow
							divCardBodyCol.appendChild(aCardBodyTitle);
							divCardBodyCol.appendChild(divCardBodyRow);
						//div Card body appendChild div Col
						divCardBody.appendChild(divCardBodyCol);
					//divSingleCard appendChild div divCarouselImageSort và  divCardBody
					divSingleCard.appendChild(divCarouselImageSort);
					divSingleCard.appendChild(divCardBody);
				//DivCardDeck appendChild divSingleCard 
				divCardDeck.appendChild(divSingleCard);
				} //Kết thúc vòng lặp for result < 15
			} else {
				for(var i=0;i < 15;i++){
					//Tao div cha Single Card , div cha nay co 2 con la card hinh va card body
					var divSingleCard = document.createElement("div");
					divSingleCard.setAttribute("class", "card my-3 border border-0");
						//Tao Card hinh
						//Tao div chinh card hinh
						//Div nay co 5 con là 1 cái ul , 2 cái div và 2 cái a
						//Tạo div card chính trước
						var divCarouselImageSort = document.createElement("div");
						var idDivCarouselImageSort = "divCarouselImageSort";
						idDivCarouselImageSort += houseResult[i].id_house;
						divCarouselImageSort.setAttribute("id", idDivCarouselImageSort);
						divCarouselImageSort.setAttribute("class", "carousel slide");
						divCarouselImageSort.setAttribute("data-ride", "carousel");
						divCarouselImageSort.setAttribute("data-interval", "0");
							//Tạo con thứ 1 ul
							//Ul nay có 3 con li
							var ulCarouselIndicators = document.createElement("ul");
							ulCarouselIndicators.setAttribute("class", "carousel-indicators");
								//Tạo 3 con li của ul
								//Tạo con li thứ 1
								var liCarouselIndicators1 = document.createElement("li");
								liCarouselIndicators1.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators1.setAttribute("data-slide-to", "0");
								liCarouselIndicators1.setAttribute("class", "active");
								//Tạo con li thứ 2
								var liCarouselIndicators2 = document.createElement("li");
								liCarouselIndicators2.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators2.setAttribute("data-slide-to", "1");
								//Tạo con li thứ 3
								var liCarouselIndicators3 = document.createElement("li");
								liCarouselIndicators3.setAttribute("data-target", idDivCarouselImageSort);
								liCarouselIndicators3.setAttribute("data-slide-to", "2");
								//Tạo con li thứ 4 nếu image4 không rỗng
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var liCarouselIndicators4 = document.createElement("li");
									liCarouselIndicators4.setAttribute("data-target", idDivCarouselImageSort);
									liCarouselIndicators4.setAttribute("data-slide-to", "3");
								}
							//ul AppendChild 3 con li nếu có con thứ 4 thì append
							ulCarouselIndicators.appendChild(liCarouselIndicators1);
							ulCarouselIndicators.appendChild(liCarouselIndicators2);
							ulCarouselIndicators.appendChild(liCarouselIndicators3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								ulCarouselIndicators.appendChild(liCarouselIndicators4);
							}
							//Tạo con thứ 2 div carousel-inner có 3 con 3 cái div carousel-item
							var divCarouselInner = document.createElement("div");
							divCarouselInner.setAttribute("class", "carousel-inner");
								//Tạo con thứ 1 carousel-item active
								var divCarouselItem1 = document.createElement("div");
								divCarouselItem1.setAttribute("class", "carousel-item active");	
									//Tạo con image 1
									var img1 = document.createElement("img");
									img1.setAttribute("src", houseResult[i].image1);
								//carousel-item 1 appendChild Image1
								divCarouselItem1.appendChild(img1);

								//Tạo con thứ 2 carousel-item
								var divCarouselItem2 = document.createElement("div");
								divCarouselItem2.setAttribute("class", "carousel-item");	
									//Tạo con image 2
									var img2 = document.createElement("img");
									img2.setAttribute("src", houseResult[i].image2);
								//carousel-item 2 appendChild Image2
								divCarouselItem2.appendChild(img2);
								
								//Tạo con thứ 3 carousel-item
								var divCarouselItem3 = document.createElement("div");
								divCarouselItem3.setAttribute("class", "carousel-item");
									//Tạo con image 3
									var img3 = document.createElement("img");
									img3.setAttribute("src", houseResult[i].image3);
								//carousel-item 3 appendChild Image3
								divCarouselItem3.appendChild(img3);

								//Nếu image4 khác rỗng ta tạo thêm con thứ 4 carousel-item
								if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
									var divCarouselItem4 = document.createElement("div");
									divCarouselItem4.setAttribute("class", "carousel-item");
										//Tạo con image 4
										var img4 = document.createElement("img");
										img4.setAttribute("src", houseResult[i].image4);
									//carousel-item 4 appendChild Image4
									divCarouselItem4.appendChild(img4);
								}
							//div carousel-inner AppendChild 3 div con carousel-item nếu có con thứ 4 thì append
							divCarouselInner.appendChild(divCarouselItem1);
							divCarouselInner.appendChild(divCarouselItem2);
							divCarouselInner.appendChild(divCarouselItem3);
							if(houseResult[i].image4 != "" && houseResult[i].image4 != null){
								divCarouselInner.appendChild(divCarouselItem4);
							}

							//Tạo con thứ 3 div card-img-overlay có 2 con div 
							var divCardImgOverlay = document.createElement("div");
							divCardImgOverlay.setAttribute("class", "card-img-overlay");
								//Tạo div con thứ 1 giá tiền
								var divPrice = document.createElement("div");
								divPrice.setAttribute("class", "float-left text-uppercase");
									//Tạo con p
									var divPriceP = document.createElement("p");
									divPriceP.setAttribute("class", "text-white");
									var textNodePriceP = document.createTextNode("$ " + houseResult[i].price);
									divPriceP.appendChild(textNodePriceP);			
								//div gia tiền appendChild con p
								divPrice.appendChild(divPriceP);	

								//Tạo div con thứ 2 trái tim
								var divHeart = document.createElement("div");
								divHeart.setAttribute("class", "d-flex justify-content-center");
									//Tạo con i
									var iHeart = document.createElement("i");
									iHeart.setAttribute("class", "fa fa-heart-o");
									iHeart.setAttribute("style", "font-size:28px;color:white");
									iHeart.setAttribute("onclick", "changeToHeartFull(this)");
								//div trái tim appendChild con i
								divHeart.appendChild(iHeart);

							//divCardImgOverlay appendChild 2 div con Price và Heart
							divCardImgOverlay.appendChild(divPrice);
							divCardImgOverlay.appendChild(divHeart);

							//Tạo con thứ 4 a carousel-control-prev
							var aCarouselControlPrev = document.createElement("a");
							aCarouselControlPrev.setAttribute("class", "carousel-control-prev");
							aCarouselControlPrev.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlPrev.setAttribute("data-slide", "prev");
								//Tạo con span prev
								var spanCarouselControlPrev = document.createElement("span");
								spanCarouselControlPrev.setAttribute("class", "carousel-control-prev-icon");

							//carousel-control-prev appendChild con span prev
							aCarouselControlPrev.appendChild(spanCarouselControlPrev);
							
							//Tạo con thứ 5 a carousel-control-next
							var aCarouselControlNext = document.createElement("a");
							aCarouselControlNext.setAttribute("class", "carousel-control-next");
							aCarouselControlNext.setAttribute("href", "#" + idDivCarouselImageSort);
							aCarouselControlNext.setAttribute("data-slide", "next");
								//Tạo con span next
								var spanCarouselControlNext = document.createElement("span");
								spanCarouselControlNext.setAttribute("class", "carousel-control-next-icon");
							//carousel-control-next appendChild con span next
							aCarouselControlNext.appendChild(spanCarouselControlNext);

						//divCarouselImageSort appendChild 5 con này ulCarouselIndicators, carouse inner
						//carrouse img overlay , a prev , a next
						divCarouselImageSort.appendChild(ulCarouselIndicators);
						divCarouselImageSort.appendChild(divCarouselInner);
						divCarouselImageSort.appendChild(divCardImgOverlay);
						divCarouselImageSort.appendChild(aCarouselControlPrev);
						divCarouselImageSort.appendChild(aCarouselControlNext);

						//Tao Card body có 1 con la 1 div Col
						var divCardBody = document.createElement("div");
						divCardBody.setAttribute("class", "card-body");
							//Tạo div Col có 2 con là 2 div a và 1 div row
							var divCardBodyCol = document.createElement("div");
							divCardBodyCol.setAttribute("class", "col");
								//Tạo con thứ 1 a CardBodyTitle
								var aCardBodyTitle = document.createElement("a");
								aCardBodyTitle.setAttribute("href", "detail.php?id_house=" + houseResult[i].id_house);
								aCardBodyTitle.setAttribute("class", "card-title");
									//Tạo con p của a
									var pCardBodyTitle = document.createElement("p");
									var textCardBodyTitleP = document.createTextNode("Details House");
									pCardBodyTitle.appendChild(textCardBodyTitleP);
								//a appendChild p
								aCardBodyTitle.appendChild(pCardBodyTitle);
								
								//Tạo con thứ 2 div row có 2 con i
								var divCardBodyRow = document.createElement("div");
								divCardBodyRow.setAttribute("class", "row");
									//Tạo con i thứ 1 bed
									var iCardBodyRowContentBedRoom = document.createElement("i");
									iCardBodyRowContentBedRoom.setAttribute("class", "fa fa-bed");
									var iCardBodyRowContentBedRoomP = document.createTextNode("  " + houseResult[i].numberBedroom );
									iCardBodyRowContentBedRoom.appendChild(iCardBodyRowContentBedRoomP);
									//Tạo con i thứ 2 bath
									var iCardBodyRowContentBathRoom = document.createElement("i");
									iCardBodyRowContentBathRoom.setAttribute("class", "fa fa-bath");
									var iCardBodyRowContentBathRoomP = document.createTextNode("  " + houseResult[i].numberBathroom );
									iCardBodyRowContentBathRoom.appendChild(iCardBodyRowContentBathRoomP);
								//div row appendChild 2 con i Bedroom và Bathroom		 
								divCardBodyRow.appendChild(iCardBodyRowContentBedRoom);
								divCardBodyRow.appendChild(iCardBodyRowContentBathRoom);
							//div Col appendChild 2 con a CardBodyTitle va divCardBodyRow
							divCardBodyCol.appendChild(aCardBodyTitle);
							divCardBodyCol.appendChild(divCardBodyRow);
						//div Card body appendChild div Col
						divCardBody.appendChild(divCardBodyCol);
					//divSingleCard appendChild div divCarouselImageSort và  divCardBody
					divSingleCard.appendChild(divCarouselImageSort);
					divSingleCard.appendChild(divCardBody);

				//DivCardDeck appendChild divSingleCard 
				divCardDeck.appendChild(divSingleCard);

				}//Kết thúc vòng lặp for result >= 15 chỉ lấy 15 cái thôi
			}// kết thúc else
			
			//sau khi làm xong thì divImageSortResult appendChild divCardDeck
			divImageSortResult.appendChild(divCardDeck);
			//div ngoai divContent appendChild divImageSortResult
			divContent.insertBefore(divImageSortResult, divFooterOfBody);

		} // end sucecess function
	}); // end Ajax
	
}