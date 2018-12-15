 // 이미지 정보들을 담을 배열
 var sel_files=[];
    
    
 $(document).ready(function() {
     $("#input_imgs").on("change", handleImgFileSelect);
 
     $("#uploadBTN").click(function(){
     if(confirm("등록하시겠습니까?")){
          if(sel_files.length > 0){
               var form1 = document.getElementById('add1');
               console.log(form1.innerHTML);
               form1.submit();
          }else{
               alert('사진을 선택해 주세요.')
          }         
     }
     });
 }); 

 function fileUploadAction() {
     console.log("fileUploadAction");
     $("#input_imgs").trigger('click');
 }

 function handleImgFileSelect(e) {

     // 이미지 정보들을 초기화
     sel_files = [];

     var files = e.target.files;
     var filesArr = Array.prototype.slice.call(files);

     filesArr.forEach(function(f) {
         if(!f.type.match("image.*")) {
             alert("확장자는 이미지 확장자만 가능합니다.");
             return;
         }
         console.log(f.name)
         sel_files.push(f);

         var reader = new FileReader();
         reader.onload = function(e) {
             $("#file_area").val(f.name);
         }
         reader.readAsDataURL(f);
         
     });
 }

 function fileUploadAction() {
     console.log("fileUploadAction");
     $("#input_imgs").trigger('click');
 }