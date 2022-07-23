import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice= await stdlib.newTestAccount(startingBalance);

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);

//create an Array for the Senates
const arrayBobs=[];

//creating a function to reuse when creating new Senate

const newBob=async()=>{
  const newSelect = async(who)=>{
  const accBobs= await stdlib.newTestAccount(startingBalance);
  const ctcBobs= accBobs.contract(backend, ctcAlice.getInfo());
  arrayBobs.push(accBobs.getAddress());
  }
  await newSelect("Bob");
  await newSelect("Bob");
  
  console.log(arrayBobs);
  
};




//push the address of each user to my array

console.log('Starting backends...');
 await ctcAlice.p.Alice({
  
    ready: ()=>{
      console.log("the president is ready to accept attachment")
    
    },
    attachBob: ()=>{
      newBob()
    }
   
   
 
  
  });

console.log('Goodbye, Mr. President and the Senates');
