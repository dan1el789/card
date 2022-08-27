function saveAsFile(filename, dataType, textInput) {
  var element = document.createElement('a');
  element.setAttribute('href','data:' + dataType + ';charset=utf-8, ' + encodeURIComponent(textInput));
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click();
}
function getBaseUrlOfRepository(){
  if(document.baseURI.includes("github.io"))
    return document.baseURI.split("/")[0] + "//" +  //Protocol
      document.baseURI.split("/")[2] + "/" +        //default domain github.io
      document.baseURI.split("/")[3] + "/"          //Repo
  return document.baseURI.split("/")[0] + "//" +    //Protocol
      document.baseURI.split("/")[2] + "/"          //custom domain points to repo
}
async function downloadMyVCard(version){
  if(version == null)
    version = "vcard-with-photo.txt"
  let request = await fetch(getBaseUrlOfRepository() + version) 
  let encodedText = await request.text()
  saveAsFile("daniel.vcf", "text/x-vcard", atob(encodedText))
}
