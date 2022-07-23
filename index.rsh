//This defines the version of reach
'reach 0.1';

//This is the main
export const main = Reach.App(() => {
   
  
  const Alice= Participant('Alice', {
    
    ready: Fun([], Null),
    attachBob: Fun([], Null)
  });

  const Bobs= API('Bobs', {
    
  });
  init();
  Alice.only(()=>{
   interact.ready();
   interact.attachBob()
   
  })
  Alice.publish();
  commit();
  


  exit();
});
