// normal Function
// function Hey() {
//   function getName(){
//   const name = "Aqsa Aslam";
//   return name;
//   }
//   return (
//     <div>
//       <h1>Hey: {getName()}</h1>
//       <h1>Bye: {getName()}</h1>
//     </div>
//   )
// }
// export default Hey;


// Function with perametr
// function Hey() {
//   function getName(yourname: string) {
//     return yourname;
//   }
//   const name = "Aqsa Aslam";
//   const name1 = "Muhammad Aslam";
//   return (
//     <div>
//       <h1>Hey: {getName(name)}</h1>
//       <h1>Bye: {getName(name1)}</h1>
//     </div>
//   )
// }
// export default Hey;

// Function with perametr and  arrow function
function Hey() {
  const getName = (yourname: string) => {
    return yourname;
  };

  const name = "Aqsa Aslam";
  const name1 = "Hadia Harmain";

  return (
    <div>
      <h1>First Name: {getName(name)}</h1>
      <h2>Last Name: {getName(name1)}</h2>
    </div>
  );
}

export default Hey;
