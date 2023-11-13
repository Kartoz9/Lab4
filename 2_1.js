function addClass(obj, cls) {
    if (!obj.className) {
      obj.className = cls; 
    } else {
      const classes = obj.className.split(' ');  
      if (classes.indexOf(cls) === -1) {
        classes.push(cls); 
      }
      obj.className = classes.join(' '); 
    }
  }
