
const date_value = document.getElementById('datePickerId');
   date_value.addEventListener('change', function (){
  console.log(date_value.value);

  const str1 ="https://api.nasa.gov/planetary/apod?api_key=fs3yGgMQ2oun7FYErtNlMLpuxgf5VAhV8sgou5ze&date="
  var  link = str1.concat(date_value.value)
  console.log(link)
  makeAPICall()

})


function currentdate(){
    datePickerId.max = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('fr-ca');
    // datePickerId.max = new Date().toLocaleDateString('fr-ca');
    datePickerId.value = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('fr-ca');
    //datePickerId.value = new Date().toLocaleDateString('fr-ca');
    datePickerId.min = new String("1995-6-16");
}


console.log(date_value)
console.log(date_value.value)
const URL = "https://api.nasa.gov/planetary/apod?api_key=fs3yGgMQ2oun7FYErtNlMLpuxgf5VAhV8sgou5ze&date=" 






async function makeAPICall() {
 
    const str1 ="https://api.nasa.gov/planetary/apod?api_key=fs3yGgMQ2oun7FYErtNlMLpuxgf5VAhV8sgou5ze&date="
    var  link = str1.concat(date_value.value)

    const result = await fetch("https://api.nasa.gov/planetary/apod?api_key=fs3yGgMQ2oun7FYErtNlMLpuxgf5VAhV8sgou5ze" +"&date=" +date_value.value)
    result.json().then(data => { 
        const img = data.url;
        const caption = data.explanation
        var leastIndex = Math.min(caption.indexOf("APOD"), caption.indexOf("Album"), caption.indexOf("Help"))
        const new_str = caption.substring(0, leastIndex);
        if (Math.abs(0 + leastIndex) > 5) {
         document.getElementById("caption").innerHTML = new_str
        } else {
         document.getElementById("caption").innerHTML = caption
        }
        document.getElementById("APODIMG").src = img;	
        console.log(data.url)
        console.log(caption)
        console.log(data)
        
    })
 }



    currentdate()
    makeAPICall()
    
 