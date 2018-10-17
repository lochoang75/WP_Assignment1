		$(document).ready(function(){
			$("#iconClose").click(function(){
				$("#divCollapseSearch").collapse('hide');
			});
			
			$(document).ready(function(){
				$('[data-toggle="tooltip"]').tooltip();   
			});
			
			
		});
	
		var mouseOverIconMap = function mouseOverIconMap(iconMap){
			iconMap.style.color = "black";
			return true;
		}
	
		var mouseOutIconMap = function mouseOutIconMap(iconMap){
			iconMap.style.color = "#aaa";
			return true;
		}
		
		var mouseOverIconList = function mouseOverIconList(iconList){
			iconList.style.color = "black";
			return true;
		}
	
		var mouseOutIconList = function mouseOutIconList(iconList){
			iconList.style.color = "#aaa";
			return true;
		}
		
		var mouseOverIconProject = function mouseOverIconProject(iconProject){
			iconProject.style.color = "black";
			return true;
		}
	
		var mouseOutIconProject = function mouseOutIconProject(iconProject){
			iconProject.style.color = "#aaa";
			return true;
		}
		
		var changeToHeartFull = function changeToHeartFull(imageHeart){
			if(imageHeart.className == "fa fa-heart-o"){
				imageHeart.className = "fa fa-heart";
			}else{
				imageHeart.className = "fa fa-heart-o";
			}
		}