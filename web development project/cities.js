const cities = [
  "New York",
  "Tokyo",
  "Berlin",
  "Shanghai",
  "London",
  "Helsinki",
  "Oslo",
  "Lisbon",
  "Stockholm",
  "Tallinn",
  "Moscow"
];

function generateListItems(arg) {
  let items = "";
  for(let i = 0; i < arg.length; i++) {
    items += `<li>${arg[i]}</li>`;
  }
  return items;
}



document.querySelector("main").innerHTML = `
<ol>
${generateListItems(cities)}
</ol>
`;
function Linked(){
class LinkedList {
  constructor(data)
  {
      this.head = {
        value:data,
       next:null
  } 
  this.tail= this.head
  this.length=1;
}
append(data){
  const newNode ={
    value: data,
    next:null
  }
  this.tail.next=newNode;
  this.tail = newNode;
  this.length++
}

}

const mylist =new LinkedList(10)
mylist.append(16)
mylist.append(20)
return mylist
}


document.querySelector("main2").innerHTML = `
<ol>
${Linked()}
</ol>
`;
