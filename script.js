var el = document.querySelector('#changed-model')

el.addEventListener('model-loaded', function(event){
  
  el.object3D.traverse(function(object3D){
  	var ligt=object3D.light
    var mat = object3D.material
    if (mat) {

      
      // modify material here
      let colorp = "#FFFFFF";
          let colorHex = Number(colorp.replace('#', '0x'));
          let color3D = new THREE.Color(colorHex);
        //mat.metalness = 0.9 
       // if(!mat.name.includes("mat"
       
         mat.roughness = 0.2
        mat.color=color3D
      //}
      // or replace it completely
      //object3D.material = new THREE.MeshPhongMaterial()
      
    }
  })
  
})
// wait until model is loaded
el.addEventListener('ml', e=>{
  
  el.object3D.traverse(function(object3D){
    var mat = object3D.material
    if (mat) {

      
      // modify material here
      let colorp =  e.detail.color;
          let colorHex = Number(colorp.replace('#', '0x'));
          let color3D = new THREE.Color(colorHex);
       if(mat.name.includes("coat")){
       
        mat.metalness = 0.4 

         mat.roughness = 0.2
        mat.color=color3D
      }
      // or replace it completely
      //object3D.material = new THREE.MeshPhongMaterial()
      
    }
  })
  
})