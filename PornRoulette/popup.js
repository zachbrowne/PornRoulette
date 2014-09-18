window.addEventListener('DOMContentLoaded', function() {
	document.getElementById("straight").addEventListener('click', function(){setPreferences("straight");});
	document.getElementById("gay").addEventListener('click', function(){setPreferences("gay");});
	document.getElementById("shemale").addEventListener('click', function(){setPreferences("shemale");});
	document.getElementById("all").addEventListener('click', function(){setPreferences("all");});
	document.getElementById("go").addEventListener('click', search);
	getPreferences();
	
});

function getPreferences() {
    chrome.extension.sendMessage({cmd: "getvalue", key: "orientation"},
        function (response) {
        	document.getElementById("straight").classList.remove("selected")
        	document.getElementById("gay").classList.remove("selected")
        	document.getElementById("shemale").classList.remove("selected")
        	document.getElementById("all").classList.remove("selected")
        	
            if (response.data == "straight") {
            	document.getElementById("straight").classList.add("selected")
            }
            else if (response.data == "gay") {
        	    document.getElementById("gay").classList.add("selected")
            }
            else if (response.data == "shemale") {
    	        document.getElementById("shemale").classList.add("selected")
            }
            else  {
	            document.getElementById("all").classList.add("selected")
            }
        });
}

function setPreferences(value) {
    chrome.extension.sendMessage({cmd: "setvalue", key: "orientation", data: value},
        function (response) {
            getPreferences();
        });
}

function search() {
    chrome.extension.sendMessage({cmd: "search"},
        function (response) {
            
        });
}
