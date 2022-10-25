# image-preview-npm
An image preview package published live on npm 

# install
 ```
 npm i image-preview-npm
 ```
 

```javascript
   import Image from 'legendary-image-preview';

 
   //use the image's getBase64Image function in your handler to get the base64 image and set it as the source of the img tag like so:\
   function ImagePreview(){
    const  [imageSource,setImageSource] = useState('');
    //initialize your image object 
    const  handleChange = (e) => {
    let image  = new Image(e.target.files);
    
    //call the getBase64Image() of this object to get the image source
    image.getBase64Image().then(res => setImageSource(res));
    
 }
 return(
 <div>
      <input onChange={handleChange} type='file'/>
      <img src={imageSource} alt='preview' />
     </div>
 )
 }
 export default ImagePreview;
 ```
   
