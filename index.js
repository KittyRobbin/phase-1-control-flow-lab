function scuberGreetingForFeet(ride){
  if (ride <=400){
return 'This one is on me!'

} else if (ride>2000 & ride<=2500){
return 'I will gladly take your thirty bucks.' 

} else{
  return 'No can do.'

}
}

function ternaryCheckCity(city){
  if (city==="NYC"){
    return 'Ok, sounds good.'

  } else{city==="Pittsburgh"}
  return 'No go.'
}

function switchOnCharmFromTip(b) {
  switch (b) {
    case 'generous':
    return 'Thank you so much.';
   case 'not so generous':
   return 'Thank you.';
   default :
    return 'Bye.';
  } 
}