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


console.log('Starting backends...');
 await ctcAlice.p.Alice({
  
    ready: ()=>{
      console.log("the president is ready to accept attachment")
    
    },
    attachBob: ()=>{
      newBob()
    }
   
   
 
  
  });
  const startJoining = async () => {
    console.log(`started joining...`);
    const runEntry = async (who) => {
      const acc = await stdlib.newTestAccount(startingBalance);
      acc.setDebugLabel(who);
      await acc.tokenAccept(JSH);
      const ctc = acc.contract(backend, ctcCreator.getInfo());
      try{
        await ctc.apis.Entrant.join();
        const [balance , bal_JSH] = await stdlib.balancesOf(acc,[null, JSH]);
        console.log(`${who} joined the whitelist with  ${fmt(balance)} network tokens and ${bal_JSH} non-network tokens`);
        if (whitelisted.length <= maxEntries) {
          whitelisted.push([who, acc , ctc]);
          console.log(whitelisted.length); 
        } 
      } catch(e) {
        console.log(e.message)
      }
  
    };
    
    await runEntry('Alice');
    await runEntry('Bob');
    await runEntry('John');
    // await runEntry('Jane');
    // await runEntry('Abe');
    // await runEntry('Claire');
    while (! done) {
      await stdlib.wait(1)
    }
  }

console.log('Goodbye, Alice and the Bobs');
