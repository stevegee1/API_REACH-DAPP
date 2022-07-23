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
  
  [ isOpen,
    entries ] =
    parallelReduce([ true, 0 ])
    .invariant(entries <= maxEntries)
    .while(isOpen && entries < maxEntries)
    .api_(Entrant.join, () => {
      check(!entrants.member(this))
      return [ (notify) => {
        notify(null);
        const who = this;
        entrants.insert(who);
        Creator.interact.seeJoin(who,who);
        return [ true, entries + 1 ];
      }];
    })
    .timeout(timeOut,() => {
      Creator.publish()
      Creator.interact.informTimeout();
      return [false, entries];
    });



  exit();
});
