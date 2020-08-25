/**
 * 
  If given an input (parameter) that is an object of endroutes and templates like:
    
  let urlTemplates = {
        "/home": ["/h1", "/h2", "/h3"],
        "/setting": ["/s1", "/s2"]
      }
 create a function that would output a template that is different every call, but evenly distributed. EX.: input = "/home", output = "/h1" (33% of time), "/h2" (33% of time), "/h3" (33% of time)
 after solving, I was then asked how I would change my function if there was a weight to each template like:
 * 
 */