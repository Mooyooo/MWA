const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

const find =name=>tree=>{
		for(const file in  tree.files){
			//console.log(tree.files[file]);
			if(tree.files[file]===name){
				 return true;
			}
		}
				
		for(const a in tree.subFolders){
				if(find(name)(tree.subFolders[a])===true)
				return true;		
		}
		return false;
	
}
console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false