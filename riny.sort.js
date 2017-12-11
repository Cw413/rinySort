var rinySort=function(data,sc,key){

	if(key){

		var arr=[];

		for(var i=0;i<data.length;i++){
			if(arr.indexOf(data[i][key])==-1){
				arr.push(data[i][key]);
			};
		};

		if(sc=='asc'){
			arr.sort(function(a,b){return a-b});
		};
		if(sc=='desc'){
			arr.sort(function(a,b){return b-a});
		};

		var newArr=[];

		for(var j=0;j<arr.length;j++){
			for(var k=0;k<data.length;k++){
				if(data[k][key]==arr[j]){
					newArr.push(data[k]);
				};
			};
		};

		return newArr;

	}else{
		if(sc=='asc'){
			data.sort(function(a,b){return a-b});
		};
		if(sc=='desc'){
			data.sort(function(a,b){return b-a});
		};

		return data;
	};

};