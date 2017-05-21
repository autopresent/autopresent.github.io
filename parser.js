var text = "hello welcome her presentation create new slide create new title hello this is example text create new text hello this example text create new slide great title hello create new text hi thank you";
var command_list = ["create new slide", "create new title", "create new text", "insert new image"];
var array = text.split(" ");// includes(command_list[0])
var increate = false; 
var k = 0;
var data = "";
var command = "";
while(k<array.length){
	if (increate == false){
		if (array[k] == "create"){
			command = array[k]+  array[k+1]+  array[k+2];
			k+=3;
			var index = command_list.indexof(command);
			if (index == 0){
				console.log("create new slide");
				//CREATE NEW SLIDE
			}
			if (index == 1){
				while (array[k] != "create" || array[k] != "insert"){
					data += array[k];
					k+=1; 
				}
				console.log("create new title: " + data);
				//CREATE NEW TITLE
				data = "";
			}
			if (index == 2){
				while (array[k] != "create" || array[k] != "insert"){
					data += array[k];
					k+=1; 
				}
				//CREATE NEW TEXT
				console.log("create new text: " + data);
				data = "";
			}
			if (index == 3){
				while (array[k] != "create" || array[k] != "insert"){
					data += array[k]; 
					k+=1;
				}
				//INSERT NEW IMAGE
				console.log("insert new image: " + data);
				data = "";

			}
		}
	}
}