document.getElementById('container').onchange = function(){
	var price = Number(document.getElementById('totalprice').value);
	
	var discount =Number(document.getElementById('discount').value);
	
	var quantity = Number(document.getElementById('quantity').value);
	document.getElementById('numOutput').innerHTML = quantity;
	document.getElementById('disOutput').innerHTML = discount+' %';
	var total = price*quantity;
	var discountPrice = total*(discount/100);
	var newPrice = total - discountPrice;
	document.getElementById('newPrice').innerHTML = "$"+newPrice.toFixed(2);
	document.getElementById('disPrice').innerHTML ="$"+discountPrice.toFixed(2);
	
}

