let Cell:any[] = [];

for (let i = 100; i >= 1; i -= 10) {
  if (i % 20 === 0) {
    for (let j = i; j > i - 10; j--) {
        if(j%12 === 0){
           Cell.push({id:j,snake:'yes',ladder:'no',destination:j-10})
        }
        else if(j%15===0){
            Cell.push({id:j,snake:'no',ladder:'yes',destination:j+12})
        }
        else{
            Cell.push({id:j,snake:'no',ladder:'no',destination:j})
        }
    }
  }
  else{
    for (let j = (i - 9); j <= i; j++){
        if(j% 5 ===0 && j%15 !== 0){
            Cell.push({id:j,snake:'no',ladder:'yes',destination:j+12})
        }
        else if(j%12===0){
            Cell.push({id:j,snake:'yes',ladder:'no',destination:j-10})
        }
        else{
            Cell.push({id:j,snake:'no',ladder:'no',destination:j})
        }
    }
  }
  console.log(Cell);
}

export default Cell