// chapter 01
// Q01
// alert("hello world");

//Q02
// alert("Error! please enter a valid password");

//Q03
// alert("welcome to JS land! \nHappy Coding!");

//Q04
// alert("welcome to JS land");
// alert("Happy coding!");

//Q05
// alert("hello, i can run JS through web browser console!");


// chapter 02
// Q01
// var username = null;

//Q02
// var myname ="syed aashir majeed";

//Q03
// var message ="hello world";
// alert(message);

//Q04
// var name ="syed aashir majeed";
// var age = "19 year old";
// var course = "certified web app dev";
// alert(name);
// alert(age);
// alert(course);

//Q05

// var name = "pizza";
// alert(name+"\n"+name.slice(0,4)+"\n"+name.slice(0,3)+"\n"+name.slice(0,2)+"\n"+name.slice(0,1));

//Q06
// var email = "syedaashir120@gmail.com"
// alert("my email address is "+email);

//Q07
// var book = "A smarter way to learn JavaScript";
// alert("i am trying to learn from the book "+book);

//Q08
// document.write("yeah i can write HTML content through javascript");

//Q09
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");



//chapter 03
//Q01
// var age ="19 years old";
// alert(age);

//Q02
// var N = 14;
// alert("you have visited this site "+N+" times");

//Q03
// var birthyear = 2001;
// document.write("my birth year is "+birthyear);
// document.writeln("data type of my birth variable is number");

//Q04
// var visitorName = "Aashir";
// var product = "T shirt(s)";
// var quantity = 5;
// document.write(visitorName+" ordered "+quantity+" "+product+" on XYZ clothing store");


//chapter 04
//Q01
// var one,_1,$hello;
// var one,ONE,_1,$1,oneTwo,x,X;
// var 1,var,1one,1_,#_;

//chapter05
//Q01
// var x = +prompt("enter num one:");
// var y = +prompt("enter num two:");
// var sum = x+y;
// document.write("sum of"+x+" and "+y+" is "+sum);


//Q02
// var x = +prompt("enter num one:");
// var y = +prompt("enter num two:");
// var sum = x+y;
// var minus = x-y;
// var div = x/y;
// var mul = x*y;
// document.write("sum of"+x+" and "+y+" is "+sum);
// document.write("minus of"+x+" and "+y+" is "+minus);
// document.write("div of"+x+" and "+y+" is "+div);
// document.write("mul of"+x+" and "+y+" is "+mul);

//Q03
// var x;
// document.write("value after declaratio is: "+x);
// x = 5;
// document.write("<br>initial value "+x);
// x++;
// document.write("<br>value after increment is "+x);
// x+=7;
// document.write("<br>value after addition is "+x);
// x--;
// document.write("<br>value after decrement is "+x);
// x= x%3;
// document.write("<br>the remainder is "+x);


//Q04
// var cost = 600;
// cost*=5;
// document.write("total cost to buy 5 tickets to a movie is "+cost);

//Q05
// var table = 4;
// for (var i = 1; i <=10; i++) {
//     document.write(table+" * "+i+" = "+(table*i)+"<br>");

// }

//Q06
// var celcius = 25;
// var ferhen = 70;
// var converttofarhen = (celcius*(9/5)+32);
// var convertocelcius = (ferhen-32)*5/9;   
// document.write(celcius+"C is "+converttofarhen+"F<br>");
// document.write(ferhen+"F is "+convertocelcius+"C");


//Q07
// var item1 = 650;
// var item2 = 100;
// var quant1 = 3;
// var quant2 = 7;
// var charges = 100;
// var total = (item1*quant1)+(item2*quant2)+charges;
// document.write("total cost of your order is "+total);


//Q08
// var total = 980;
// var obtained = 804;
// var percentage = (obtained/total)*100;
// document.write("percentage is "+percentage);

//Q09
// var dollar = 104.80;
// var riyal = 28;
// var total = (dollar*10)+(riyal*25);
// document.write("total pakistani currency is "+total);

//Q10
// var num = 1;
// (((num+5)*10)/2);

//Q11
// var current = 2016;
// var birthyear = 1992;
// var age = current-birthyear;
// document.write("your age: "+age);

//Q12
// var radius = 20;
// var pi = 3.142;
// var circumference = (2*pi*radius);
// var area = pi*(radius*radius);
// document.write("radius is "+radius);
// document.write("<br>circumference of circle is "+circumference);
// document.write("<br>area of circle is "+area);

//Q13
// var fav = "choco chip";
// var current = 15;
// var max = 65;
// var amount = 3;
// var total = (max-current)*amount;
// document.write("you will need "+total+" "+fav+" to last you untill the ripe of old age of "+max);



//chapter06
//Q01
// document.write("Result");
// var a = 10;
// document.write("<br>the value of a is "+a);
// document.write("<br>_________________________");
// document.write("<br>the value of ++a is :"+(++a));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br>the value of a++ is: "+(a++));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br>the value of --a is: "+(--a));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br>the value of a-- is: "+(a--));
// document.write("<br>Now the value of a is: "+a);

//Q02
// var a = 2;
// var b= 1;
// var result = --a - --b + ++b + b--;
// --a;
// var num1 = (--a - --b );
// var num2 = (--a - --b + ++b);
// var rsult = (--a - --b + ++b +b--);
// document.write("a is "+num1);
// document.write("<br>b is "+num2);
// document.write("<br>result is "+rsult);


//Q03
// var name = prompt("enter user name ");
// alert("hello "+name);

//Q04
// var table = +prompt("enter table number");
// var num = 0;
// if (table ==0){
//     num = 5;
// }
// else{
//     num = table;

// }
// for (var i = 1; i <=10; i++) {
//     document.write(num+" * "+i+" = "+(num*i)+"<br>");

// }

//Q05
// var subject1 = prompt("enter subject 1");
// var subject2 = prompt("enter subject 2");
// var subject3 = prompt("enter subject 3");
// var total = 100;
// var mark1 = +prompt("enter mark for subject 1");
// var mark2 = +prompt("enter mark for subject 2");
// var mark3 = +prompt("enter mark for subject 3");
// var perc1 = (mark1/total)*100;
// var perc2 = (mark2/total)*100;
// var perc3 = (mark3/total)*100;
// var obt  = mark1+mark2+mark3;
// var perc = (obt/300)*100;
// document.write("Subject  Total Marks  obtained marks  percentage");
// document.write("<br>"+subject1+"\t\t  "+mark1+"\t\t  "+perc1);
// document.write("<br>"+subject2+"\t\t  "+mark2+"\t\t  "+perc2);
// document.write("<br>"+subject3+"\t\t  "+mark3+"\t\t  "+perc3);
// document.write("<br>\t\t"+300+"\t\t"+obt+"\t\t"+perc);

//  CHAPTER 12 TO 13


// QUESTION 1
// var  x = prompt("Enter char: ");
// if(x>="A" && x<="Z")
// {document.write(x+" Character is UpperCase ")}
// else if (x>="a" && x<="z"){document.write(x+" Character is LowerCase ")}
// else if (x>="0" ){document.write(x+"  is a number ")}



// // QUESTION 2
// var  x = prompt("Enter first number: ");
// var y = prompt("Enter second number: ");
// if(x>y){document.write(x+" is greater")}
// else if( x==y){document.write("both are equal x = ",x," y = ",y)}
// else{document.write(y+" is greater")}



// QUESTION 3
// var  x = prompt("Enter char: ");
// if(x>"0")
// {document.write(x+" is a positive number")}
// else if (x<"0"){document.write(x+" is a Negative number ")}
// else if (x=="0" ){document.write(x+"  is zero ")}


// QUESTION 4
// var  x = prompt("Enter char: ");
// if(x=="a" || x=="A"  ||  x=="e" || x=="E"  ||  x=="I" || x=="i"  ||  x=="o" || x=="O"  ||  x=="u" || x=="U" ){document.write(x+" is a vowel ")}
// else{document.write(x+" is not a vowel")}



// QUESTION 5
// var pass = "saylani";
// var x = prompt("Enter Password: ");
// if(x===pass){document.write("Correct Password")}
// else if(x==""){document.write("Please enter password: ")}
// else{document.write("Incorrect")}



// QUESTION 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// {
// greeting = "Good evening";
// }


// // QUESTION 7
// var h = prompt('Enter Hour: ');
// if(h.slice(0,2)>12 && h.slice(0,2)<=24)
// {
// document.write((h.slice(0,2)-12)+":"+h.slice(2,4)+"am");
// }
// else if(h.slice(0,2)>=0 && h.slice(0,2)<=12){
//     document.write((h.slice(0,2))+":"+h.slice(2,4)+"pm");
// }



//  CHAPTER 14 TO 16


// Question 1
// var array = []
// array = new Array();


// Question 2
// var array = new Array();


// Question 3
// var uni = ["NED", "KIET", "CBM"];


// Question 4
// var uni = [1,2,3];



// Question 5
// var boolArray = [true,false];




// Question 6
// var mix = ["alex", 1, true];




// Question 7
// var mix = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
// for (var i=0; i<=mix.length-1;i++){
//     document.write(mix[i]+"<br>")
//}


// Question 8

// var students = ["ali","ahsan","harry"];
// var marks = [300,350,400];
// for (var i=0; i<=students.length-1;i++)
// {
//     document.write("Score of "+students[i]+" is "+marks[i]+" Percentage is: "+marks[i]/500*100  +"% <br>");
// }


// QUESTION 9 A
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a colour in beginning: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.unshift(x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 




// Question 9 B
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a colour in last: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.push(x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// // Question 9 C
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a first colour in beginning: ")
// var y = prompt("Enter a second colour in beginning: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.unshift(x);
// colors.unshift(y);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// Question 9 D
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.shift()
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 


// Question 9 E
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.pop()
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// Question 9 F
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// x=prompt("Enter index: ")
// y= prompt("Enter color: ")
// colors.splice(x,0,y);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 


// Question 9 G
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// x=prompt("enter index  ")
// // y= prompt("Enter color: ")
// colors.splice(x,x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// }


// QUESTION 10
// var score=[230,435,453,234,231];
// score.sort();
// console.log(score);



// // QUESTION 11
// var word =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var word2=word.slice(2,4);
// console.log(word);
// console.log(word2);


// QUESTION 12
// var arr=["This","is","my","cat"];
// var arr1=arr.join(" ");
// console.log(arr1);


// QUESTION 13
// var arr=[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");
// console.log("Out: ")
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);


// QUESTION 14
// var arr=[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");
// arr.reverse();
// console.log("Out: ")
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);


// QUESTION 15
// var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write(arr[0],);
// document.write("\n");
// document.write(arr[1]);
// document.write("\n");
// document.write(arr[2]);
// document.write("\n");
// document.write(arr[3]);
// document.write("\n");
// document.write(arr[4]);
// document.write("\n");
// document.write(arr[5]);



//chapter 17-20

// Question 1
// var Arr=[[1,2],[3,4],[5,6]];

// // Question 2
// var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];



// // Question 3
// for (let index = 1; index < 11; index++) {
//     console.log(index);
//      }


// // Question 4
// var num=prompt("Enter Number");
// var len=prompt("Enter Length");

// for (let index = 1; index <= len; index++) {
//     console.log(num," * ",index," = ",num*index);
// }



// // Question 5
// var fruits=["apple","banana","mango","orange","strawberry"]
// for (let index = 0; index < fruits.length; index++) {
//     console.log("Element at Index ",index," is ",fruits[index]);

// }


// // Question 6
// console.log("Counting : \n");
// var Result="";
// for (let index = 1; index < 16; index++) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);

// Result="";
// console.log("Reversed Counting : \n");
// for (let index = 10; index > 0; index--) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);

// Result="";
// console.log("Even Counting : \n");
// for (let index = 0; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);

// Result="";
// console.log("Odd Counting : \n");
// for (let index = 0; index <= 20; index++) {
//     if (index%2!=0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);

// Result="";
// console.log("Series : \n");
// for (let index = 2; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+"k, ";   
//     }
// }
// console.log(Result);


// // QUESTION 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var B=prompt("What u want in our Bakery"); 
// var flag=0;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]==B) {
//         console.log(B," is available at index ",index);
//         flag=1;
//         break
//     } 
// }
// if (flag==0) {
//     console.log(B," is not available at out store");
// }


// // QUESTION 8
// var A = [24, 53, 78, 91, 12];
// var a=0;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]>a) {
//         a=A[index]
//     }

// }
// console.log("The Largest Number is ",a);


// // QUESTION 9
// var A = [24, 53, 78, 91, 12];
// var a=1000;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]<a) {
//         a=A[index]
//     }

// }
// console.log("The Smallest Number is ",a);


// // QUESTION 10
// var Result="";
// for (let index = 1; index <= 100; index++) {
//     if (index%5==0) {
//     Result=Result+index;   
//     Result=Result+", "   
//     }
// }
// console.log(Result);



// // //chapter 21 - 25
// // //1
// var f = prompt("Enter first name: ");
// var l = prompt("Enter last name: ");

// alert("Hello " + f + " " + l);

// //2
// var model = prompt("Enter your favourite mobile model: ");
// var len = model.length;
// alert("My favourite phone is: " + model + "\n" + "Length of string: "+len);

// //3
// var pak = "Pakistani";
// var index;
// for(var i=0; i<pak.length; i++)
// {
//     if(pak[i] === 'n')
//     {
//         index = i;
//         break;
//     }
// }

// alert("String: " + pak + "\n" + "Index of 'n' : " + index);

// //4
// var s = "Hello World";
// var index2;
// for(var i=s.length-1; i>=0; i--)
// {
//     if(s[i] === 'l')
//     {
//         index2 = i;
//         break;
//     }
// }

// alert("String: " + s + "\n" + "Last index of 'l' : " + index2);

// //5
// var pak2 = "Pakistani";
// var index3;
// for(var i = 0; i<4; i++)
// {
//     index3 = pak2[i];
// }
// alert("String: " + pak2 + "\n" + "Character at index 3: " + index3);

// //6
// var f2 = prompt("Enter first name: ");
// var l2 = prompt("Enter last name: ");
// var name = f2 + " " + l2;

// alert("Hello " + name);

// //7
// var s2 = "Hyderabad";
// s2 = s2.replace("Hyder","Islam");
// document.write(s2);

// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

// //8
// var message = "Ali and Sami are best friends. They play cricket and football together."; 

// message = message.replace(/and/g ,"&");

// document.write("<br>" + "<br>" + "<br>" + "<br>" + message);


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //9
// var s3 = "472";
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + s3 + "<br>" + "Type: " + "string");
// s3 = parseInt(s3);
// document.write("<br>" + "Value: " + s3 + "<br>" + "Type: " + "number");


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



// //10
// var s4 = prompt("Enter string: ");
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + "User input: " + s4 );
// s4 = s4.toUpperCase();
// document.write("<br>" + "Value: " + "Upper case: " + s4 );



// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //11
// var s5 = prompt("Enter string: ");
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s5 );
// var first = s5.slice(0,1);
// first = first.toUpperCase();
// s5 = first + s5.slice(1);
// document.write("<br>" + "Title case: " + s5);


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

// //12
// var a =35.36;
// document.write("Number : "+a+"<br>")
// var b =a.toString()
// var c =b.replace(".","");
// document.write("Result  : "+c)


//13
// var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
// var checkForSpecialChar = function(string) {
//     for (i = 0; i < specialChars.length; i++) {
//         if (string.indexOf(specialChars[i]) > -1) {
//             return true
//         }
//     }
//     return false;
// }

// var str = "YourTe@xt";
// if (checkForSpecialChar(str)) {
//     alert("Not Valid");
// } else {
//     alert("Valid");
// }


// //14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var n = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// n = n.toLowerCase();
// for(var i=0; i<A.length; i++)
// {
//     if(A[i] === n)
//     {
//         document.write("<br>" + "<br>" + "<br>" + "<br>" + n + " is " + "<b>" + "available " + "</b>" + "at index " + i + " in our bakery");
//     }
// }



// //15
// var password = prompt("Enter password: ");
// password = password.toLowerCase();
// var flag = -1;
// var flag2 = -1;
// var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var arr2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// if(password.length < 6)
// {
//     document.write( "<br>" + "Password cannot be of less than 6 characters Please enter a valid password!");
// }
// else if(password.slice(0,1) === "0" || password.slice(0,1) === "1" || password.slice(0,1) === "2" || password.slice(0,1) === "3" || password.slice(0,1) === "4" || password.slice(0,1) === "5" || password.slice(0,1) === "6" || password.slice(0,1) === "7" || password.slice(0,1) === "8" || password.slice(0,1) === "9")
// {
//     document.write( "<br>" + "Password cannot begin with a number Please enter a valid password!");
// }


// for(var i=0; i<password.length; i++)
// {
//     for(var j=0; j<arr.length; j++)
//     {
//         if(password[i] === arr[j])
//         {
//             flag2 = 0;
//         }
//         else if(password[i] === arr2[j])
//         {
//             flag = 0;
//             break;
//         }
//     }
// }

// if(flag2 === -1)
// {
//     document.write( "<br>" + "Password must contain alphabets Please enter a valid password");
// }

// if(flag === -1)
// {
//     document.write( "<br>" + "Password must contain a number Please enter a valid password");

// }

// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //16
// var university ="University of Karachi";
// var str = []
// var str =university.split('');
// for (var i = 0; i < str.length; i++) {
// 	document.write(str[i]+"<br>")
// }




// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



// //17
// var s1 =  prompt("Enter here: ");
// var v = s1[s1.length-1];
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s1 + "<br>" + "Last character of input: " + v);



// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



// //18  
// var text = "The quick brown fox jumps over the lazy dog";
// var a = 0;

// document.write("<br>" + "<br>" + "<br>" + "<br>" + "Text: " + text);

// text = text.toLowerCase();

// for(var i=0; i<text.length; i++)
// {
//     if(text.slice(i, i+3) === "the")
//     {
//         a++;
//     }
// }

// document.write( "<br>" + "There are " + a + " occurance(s) of 'the' ");


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //chapter 26 - 30

// //1 (a)
// var b = +prompt("Enter a positive integer: ");
// while(1)
// {
//     if(b < 1)
//     {
//         b = +prompt("Enter a positive integer: ");
//     }
//     else
//     {
//         break;
//     }
// }
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + b);

// var c = Math.round(b);
// document.write("<br>" + "round off value: " + c);

// var d = Math.floor(b);
// document.write("<br>" + "floor value: " + d);

// var e = Math.ceil(b);
// document.write("<br>" + "ceil value: " + e);


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //2
// var f = +prompt("Enter a negative floating point number: ");
// while(1)
// {
//     if(f >= 0)
//     {
//         f = +prompt("Enter a negative floating point number: ");
//     }
//     else
//     {
//         break;
//     }
// }
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + f);

// var g = Math.round(f);
// document.write("<br>" + "round off value: " + g);

// var h = Math.floor(f);
// document.write("<br>" + "floor value: " + h);

// var i = Math.ceil(f);
// document.write("<br>" + "ceil value: " + i);


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //3
// var a2 = +prompt("Enter number to have absolute value: ");
// if(a2 < 0)
// {
//     var a3 = a2*(-1);
//     document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a3);
// }
// else 
// {
//     document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a2);
// }


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //4
// var a3 = Math.random();
// a3 = (a3 * 6) + 1;
// a3 = Math.floor(a3);
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "random dice value: " + a3);

// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

// //5
// var a4 = Math.random();
// a4 = (a4 * 2) + 1;
// a4 = Math.floor(a4);
// document.write("<br>" + "<br>" + "<br>" + "<br>" + a4 + "<br>" + "random coin value: ");

// if(a4 === 2)
// {
//     document.write("Heads");
// }
// else if(a4 === 1)
// {
//     document.write("Tails");
// }

// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

// //6
// var a5 = Math.random();
// a5 = (a5 * 100) + 1;
// a5 = Math.floor(a5);

// document.write("<br>" + "<br>" + "<br>" + "<br>" + "random number between 1 and 100: " + a5);

// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //7
// var a6 = prompt("Enter your weight in kilograms");
// var a7 = parseFloat(a6);
// //a7 = Math.random() * a7;
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "The weight of user is " + a7 + " kilograms");


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


// //8
// var a8 = Math.random();
// a8 = (a8 * 10) + 1;
// a8 = Math.floor(a8);
// var a9 = +prompt("Enter a number: ");

// if(a9 === a8)
// {
//     document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);
//     document.write("<br>" + "Congratulation!");
// }
// else{
//     document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);

// }




//chapter 31-34
//question 1
// var a = new Date();
// document.write(a)





// //question 2
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current Month : "+arr[b])



// //question 3
// var a = new Date();
// var b =a.getDay()
// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// alert("today is "+arr[b]);




// //question 4
// var a = new Date()
// var d = a.getDay()
// if (d==0 || d==6){
// 	alert("It’s Fun day")
// }





// //question 5
// var a = new Date();
// var b = a.getDate();
// if (b<16){
// 	alert("First fifteen days of the month")
// }
// else{
// 	alert("Last days of the month")
// }







// //question 6
// var a = new Date()
// document.write("Current Date : "+a)
// var b= a.getTime()
// document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
// var min = b/(1000*3600)
// document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)





// //question 7
// var a = new Date()
// b=a.getHours()
// if (b < 12){
// 	alert("Its AM")
// }
// else{
// 	alert("It's PM")
// }



// //question 8
// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)




// //question 9
// var a = new Date("Jun 18, 2015")
// b=a.getTime()
// var today = new Date()
// var tomili = today.getTime()
// var d = tomili-b
// d=d/(1000*3600*24)
// //d=Math.round(d)
// document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")




// //question 10
//  var start = new Date("Jan 01, 2015")
//  var startsec = start.getTime()
//  var end = new Date("Dec 05, 2015")
//  var endsec = end.getTime()
//  document.write("On reference date "+end+"<br>")
//  var dif = endsec-startsec;
//  document.write(dif/(1000*60)+" seconds had passed since begining of 2015")




// //question 11
// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getHours()
// var d = new Date();
// a=ab-1
// d.setHours(a)
// document.write("1 hour ago, it was "+d)



// //question 12
// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getFullYear()
// var d = new Date();
// a=ab-100
// d.setFullYear(a)
// document.write("100 year back, it was "+d)






// //question 13
// var age = prompt("enter your age")
// var a = new Date()
// var year = a.getFullYear()
// document.write("Your age is "+age)
// dif=year-age
// document.write("<br>Your birth year is "+dif)



// //question 14
// var name ="ABC Customer"
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = arr[b]
// var unit = 410
// var chrg = 16
// var net = unit*chrg
// var late =350
// var gross =net +late

// document.write("<h1>K-Electric Bill </h1>")
// document.write("<br>Customer Name  "+name)
// document.write("<br> Current Month "+month)
// document.write("<br>  Number of units "+unit)
// document.write("<br> Charges per unit "+chrg+"<br>")

// document.write("<br>Net Amount Payable (within Due Date) "+net)
// document.write("<br>Late Payment Surcharge  "+late)
// document.write("<br>Gross Amount Payable (after Due Date)  "+gross)





//chapter 35-38


// QUESTION 1
// function dateandtime(){
// 	var a = new Date()
// 	alert(a)
// }
// dateandtime()



// QUESTION 2
// function x(a,b){
//     document.write("Hello "+a+" "+b);
// }
// x("john","Sam")





// QUESTION 3
// function x(a,b){
//     document.write("sum is "+(a+b));
// }
// x(3,3)



// QUESTION 4
// function x(a,b,c){
//     if (b==="+")
//     { 
//         document.write("sum is ",((+a)+(+c)))
//     }
//     else if (b==="-")
//     {
//         document.write("subtraction is ",a-c)
//     }
//     else if (b==="*")
//     {
//         document.write("multiplication is ",a*c)
//     }
//     else if (b==="/")
//     {
//         document.write("division is ",a/c)
//     }
//     else if (b==="%")
//     {
//         document.write("remainder is ",a%c)
//     }
//     else
//     {
//         document.write("Invalid operator")
//     }
// }

// x(prompt("Enter num 1"),prompt("Enter operator"),prompt("Enter num 2"))






// QUESTION 5

// function x(a){
//     document.write(a*a)
// }
// x(3)



// QUESTION 6
// function x(a)
// {
//     if (a==0 || a==1){
//         return 1
//     }
//     else{
//         var fact=1;
//         for(i=a;i>1;i--){
//             fact *= (i)
//         }
//         document.write("Factorial is ",fact)
//     }

// }
// x(5)





// QUESTION 7

// function x(a,b)
// {
//     for(var i =a; i<=b;i++)
//     {
//         document.write(i+" ")
//     }

// }
// x(1,55)




// QUESTION 8
// function x(a,b){
//     document.write("H is ",Math.sqrt((a*a) + (b*b)))
// }
// x(5,5)



// QUESTION 9
// function x(a,b){
//     document.write("Area is ",(a*b))
// }
// x(prompt("Enter height"),prompt("Enter width"))


// QUESTION 10
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//         document.write(str, " is not a palindrome")

//         return false;
//                 }
//     }
//     document.write(str," is a palindrome")
//    }
//    palindrome("CIVIC2");

// QUESTION 11
// function X(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     // Directly return the joined string
//     return splitStr.join(' '); 
//  }

//  document.write(X("the quick brown fox"));




//  QUESTION 12

// function x(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(X("Web Development Tutorial"));







//  QUESTION 13


// function Occurrences(a,b){
// 	a=a.toLowerCase()
// 	var ar= a.split('')
// 	var count =0
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i]==b) {
// 			count+=1
// 		}
// 	}
// 	document.write("Occurrences of letter "+b+" is : "+count)
// }
// Occurrences("JSResourceS.com","o")




//  QUESTION 14

// function calcCircumference(radius) {
//     var circumference = (Math.PI * 2) * radius;
//     var area = (Math.pow(radius, 2)) * Math.PI;
//    document.write("The circumference of a circle with a radius of " + radius + " is " + circumference + " The area for this circle is " + area)
//   }
//    calcCircumference(37);




//chap 38 to 42

//Q1
// function power(a, b) {
//     var value = 1
//     var i = b;
//     for (; i != 0; --i) {
//         value *= a;
//     }
//     alert("the ans is : " + value)
// }
// power(2, 5)

//Q2
// function leapYear(year) {
//     if ((year % 4) == 0) {
//         if ((year % 100) == 0) {
//             if ((year % 400) == 0) {
//                 alert(year + " is a leap year")
//             } else {
//                 alert(year + " is not a leap year")
//             }
//         } else {
//             alert(year + " is a leap year")
//         }
//     } else {
//         alert(year + " is not a leap year")
//     }
// }
// leapYear(2020)

//Q3
// function area(a, b, c) {
//     function S() {
//         var S = (a + b + c) / 2
//         return S
//     }
//     var s = S()
//     var area = s * (s - a) * (s - b) * (s - c)
//     alert("area is : " + area)

// }
// area(3, 3, 3)

//Q4
// function avg(s1, s2, s3) {
//     var obt = s1 + s2 + s3
//     var avg = obt / 3
//     return avg
// }

// function perc(obt) {

//     var total = 300
//     var perc = (obt * 100) / total
//     return perc
// }

// function main() {
//     var a = +prompt("enter value of a")
//     var b = +prompt("enter value of b")
//     var c = +prompt("enter value of c")
//     var obt = a + b + c
//     var average = avg(a, b, c)
//     var percentage = perc(obt)
//     alert("the average marks is : " + average + " and percentage is : " + percentage)
// }
// main()

//Q5
// function indexOf(char) {
//     var string = "hello world, welcome to the universe";
//     var res = undefined;
//     for (var i = 0; i <= string.length; i++) {
//         if (string[i] == char) {
//             res = i + 1
//             break
//         }
//     }
//     if (res === undefined) {
//         alert("No such charater available in string")
//     } else {
//         alert("Character " + char + " is present at " + (res - 1))
//     }
// }
// indexOf("r")

//Q6
// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
// var str = "Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long"
// console.log(removeVowels(str))

//Q7
// const def = "Pleases read this application and give me gratuity";
// const answer = getResult(def);
// alert('The vowels in succetion are ' + answer + ' times');

// function getResult(input) {
//     const words = input.split(' ');
//     let finalResult = 0;
//     words.forEach((word) => {
//         if (countVowelPair(word) > 0) {
//             finalResult++;
//         }
//     });

//     return finalResult;
// }

// function countVowelPair(word) {
//     let count = 0;
//     for (let i = 1; i < word.length; i++) {
//         if (isVowel(word[i]) && isVowel(word[i - 1])) {
//             count++;
//         }
//     }
//     return count;
// }

// function isVowel(char) {
//     let result = false;
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             result = true;
//             break;

//         default:
//             break;
//     }

//     return result;
// }

//Q8
// function meter(km) {
//     var meter = km * 1000
//     alert(km + " km is equal to " + meter + " meters")
// }

// function feet(km) {
//     var feet = km * 3281
//     alert(km + " km is equal to " + feet + " feets")
// }

// function inches(km) {
//     var inches = km * 39370
//     alert(km + " km is equal to " + inches + " inches")
// }

// function centi(km) {
//     var centi = km * 100000
//     alert(km + " km is equal to " + centi + " centimeters")
// }

// function display() {
//     var kilometer = +prompt("enter kilo meters")
//     var choice = +prompt("enter your choice 1)Meters, 2)Feets, 3)Inches, 4)Centimeters")
//     if (choice == 1) {
//         meter(kilometer)
//     } else if (choice == 2) {
//         feet(kilometer)
//     } else if (choice == 3) {
//         inches(kilometer)
//     } else if (choice == 4) {
//         centi(kilometer)
//     } else {
//         alert("invalid choice!")
//     }
// }
// display()

//Q9
// function overtime() {
//     var salary = +prompt("enter employee salary")
//     var hours = +prompt("enter employee working hours")
//     if (hours > 40) {
//         hours = hours - 40;
//         ovrt = hours * 12
//         salary = salary + ovrt
//     } else {
//         alert("no overtime")
//     }
//     alert("employee salary is " + salary + " and working hours is " + (hours + 40) + " and overtime paid is " + ovrt)
// }
// overtime()

//Q10
// function currency() {
//     var amount = +prompt("enter amount to withdraw")
//     hundred = 0
//     fifty = 0
//     ten = 0
//     while (amount >= 0) {
//         if (amount >= 100) {
//             hundred++
//             amount = amount - 100

//         } else if (amount >= 50) {
//             fifty++
//             amount = amount - 50

//         } else if (amount >= 10) {
//             ten++
//             amount = amount - 10
//         } else {
//             break
//         }
//     }
//     alert("you will have " + hundred + " hundred notes and " + fifty + " fifty notes and " + ten + " ten notes")
// }
// currency()



//chapter 43-48
//Q1
// function alertbox() {
//     alert("welcome to our universe!")
// }

//Q2
// function purchase() {
//     alert("thank you for purchasing from us!")
// }


//Q3
// function deleteRow(btn) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

//Q4
// function changePic1() {
//     document.getElementById("myImg").src = "mobile.png";
// }

// function changePic2() {
//     document.getElementById("myImg").src = "02.png";
// }

//Q5
// function increase() {
//     var value = parseInt(document.getElementById('counter').value, 10);
//     value++;
//     document.getElementById('counter').value = value;
// }

// function decrease() {
//     var value = parseInt(document.getElementById('counter').value, 10);
//     value--;
//     document.getElementById('counter').value = value;
// }

// function submit() {
//     var submit = parseInt(document.getElementById('counter').value, 10)
//     document.getElementById('ans').value = "Your Answer is: " + submit;
// }


//chapter 49 - 52
// Question 1
// var show = document.getElementById("ptag")
// const sub = () =>{
//     val = document.getElementById("inpu").value 
//     va = document.getElementById("pswrd").value 
//     //alert(val)
//     show.innerHTML = `Your name is ${val} and your password is ${va}`
// }
// //Question 2
// a = document.getElementById("para")
// const read = () => a.innerHTML = "abcdefghijklmnopqrstuvwxyz"
// //question 3
// var table = document.getElementById("table") 
//  function addtodo(){
//      var todoitem = document.getElementById("todo-item");
//      var td = document.createElement('td')
//      var tdtext = document.createTextNode(todoitem.value)
//      td.appendChild(tdtext)
//      var delbtn = document.createElement("button")
//      var deltext = document.createTextNode("DELETE")
//      delbtn.setAttribute("class","btn")
//      delbtn.setAttribute("onclick","deleteitem(this)")
//      delbtn.appendChild(deltext)
//      var editbtn = document.createElement("button")
//      var edititext = document.createTextNode("EDIT")
//      editbtn.append(edititext)
//      editbtn.setAttribute("onclick","edititem(this)")
//      td.appendChild(delbtn)
//      td.appendChild(editbtn)
//      table.appendChild(td) 
//      todoitem.value = ""
//  } 
//  function deleteitem(e){
//      e.parentNode.remove()
//  }
//  function deleteall(){
//      table.innerHTML=""
//  }
//  function edititem(e){
//      var val = e.parentNode.firstChild.nodeValue
//      var editValue = prompt("Enter edit STUDENT name",val)
//      e.parentNode.firstChild.nodeValue=editValue
//  } 

//  //question 1.1
//  var ele = document.getElementById("main-content")
//  //question 1.2
//  var x= ele.childElementCount;
//  //console.log(x)
//  x=x*2
//  for(var i=0;i<x;i++){
//          console.log(ele.childNodes[i])
// }
// //question 1.3
// for (var i=0;i<5;i++){
//  var list = document.getElementById("main-content").childNodes;
//  var nname = list[i].textContent

// var h1 = document.createElement('h1');
// var h1text = document.createTextNode(nname)
// h1.appendChild(h1text)
// document.body.appendChild(h1);
// }
// //question 1.4
// var inp = document.getElementById("first-name")
// inp.value="Muhammad"
// //question 1.5
// var inp = document.getElementById("last-name")
// inp.value="Muhammad Ibad"
// var inp = document.getElementById("email")
// inp.value="mibad0338@gmail.com"
// //question 2.1
// var first = document.getElementById("form-content");
// var nytpe = first.nodeType;
// var h1 = document.createElement('h1');
// var h1text = document.createTextNode(nytpe)
// h1.appendChild(h1text)
// document.body.appendChild(h1);
// //question 2.2
// var f = document.getElementById("lastName");
// var nytpe = f.nodeType;
// var h1 = document.createElement('h1');
// var h1text = document.createTextNode(nytpe)
// h1.appendChild(h1text)
// document.body.appendChild(h1);
// //question 2.3
// var f = document.getElementById("lastName");
// f.textContent="Update Content"
// //question 2.4
// var a = document.getElementById("main-content")
// ab = a.firstChild.textContent
// var h1 = document.createElement('h1');
// var h1text = document.createTextNode(ab)
// h1.appendChild(h1text)
// document.body.appendChild(h1);
// yz = a.lastChild.textContent
// var h1 = document.createElement('h1');
// var h1text = document.createTextNode(yz)
// h1.appendChild(h1text)
// document.body.appendChild(h1);
// //question 2.6
// var e = document.getElementById("email")
// var ntype = e.parentNode.nodeType
// var h1 = document.createElement('h1');
// var h1text = document.createTextNode(ntype)
// h1.appendChild(h1text)
// document.body.appendChild(h1);