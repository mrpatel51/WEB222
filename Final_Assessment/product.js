function validateForm()
{
  let pid = document.forms['signup']['pid'].value;
  let pdes = document.forms['signup']['pdes'].value;
  let price = document.forms['signup']['price'].value;
  let uname = document.forms['signup']['uname'].value;
  let nsup = document.forms['signup']['nsup'];
  let signed = document.forms['signup']['signed'];
  let qtested = document.forms['signup']['qtested'];
  
  
  let error = document.getElementById("error");
  error.innerHTML = "";
  let flag = true;
  var count=0;
  
  var numbers = /^[0-9]+$/;
  if(pid.match(numbers) && pid.length == 8)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid Product ID. <br>";
		  flag = false;
		  count++;
	  }
	  
  }
  
  var upper = /^[A-Z]/;
  if(upper.test(pdes) && pdes.length >= 20)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid Product Description. <br>";
		  flag = false;
		  count++;
	  }
  }
  
  var dec = /^[-+]?[0-9]+\.[0-9]+$/;
  if(price.match(numbers) && !price.match(dec) && price < 1000)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid Price. <br>";
		  flag = false;
		  count++;
	  }
  }
  
  var alpha=/[a-zA-Z]/;
  if(alpha.test(uname) && uname.length > 6)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid UserName. <br>";
		  flag = false;
		  count++;
	  }
	  
  }
  
  if(nsup.checked || signed.checked || qtested.checked )
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Please Select Supplier Status. <br>";
		  flag = false;
		  count++;
	  }
	  
  }
  
  if(flag==false)
  {
	  error.style.backgroundColor = "#454545";
  }
  else
  {
	  alert("Success!!!");
  }
  
  return flag;
}