function removeClass(obj, cls) {
    if (!obj.className) {
      return; 
    }
    const classes = obj.className.split(' '); 
    
    for (let i = classes.length - 1; i >= 0; i--) {
      if (classes[i] === cls) {
        classes.splice(i, 1);
      }
    }
  
    obj.className = classes.join(' '); 
  }
  let obj = {
    className: 'open menu'
  };
  
  removeClass(obj, 'open');   
  removeClass(obj, 'blabla'); 
  
  obj = {
    className: 'my menu menu'
  };
  removeClass(obj, 'menu');
  console.log(obj.className);
  