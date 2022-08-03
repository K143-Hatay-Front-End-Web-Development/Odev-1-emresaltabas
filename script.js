
//Largest Palindrome Product
//Task: 
//1. 3 basamaklı sayıların çarpımıyla bulunan en büyük palindromu gösteren formulu bul.
// 2. Örn:2 basamaklı en sayılarla yapılabilecek en buyuk palindrome sayısı
// 99*91=9009
// Yöntem:
//1. Uc basamaklı sayıları döngüye al.
//2. Döngüde en büyük 3 basamaklı sayılardan başlayarak birbiriyle çarp,
// ve çıkan sonucun , reverse edilmiş şekliyle eşit olup 
// olmadıgını (palindrome) kontrol et ve eşit olanları bir değişkene ata.
//3. Palindrome olarak atanan değerler arasından en büyük olanı yazdır. 

let result=1;
let myPals=[];
function myFunction(){
  for(let i=999; i>99; i--){
    for(let j=999;j>99;j--){
        result=i*j; 
        let revResult=result.toString().split("").reverse().join("");//carpma islemi sonucu tersini elde edebilmek için önce arraye sonra tekrar stringe ceviriliyor
        revResult=parseInt(revResult)//string deger number'a cevriliyor
        if(result===revResult){
        myPals.push(result) //koşulu sağlayanların(palindrome) hepsi myPals atanıyor.
      }      
  }
  }
  myPals=myPals.sort(function(a,b){return b-a}) //büyükten kücüge dogru sıralanıyor
  return myPals[0];// en büyük değer döndürülüyor
}
myFunction()