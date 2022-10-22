# image-preview-npm
An image preview package published live on npm 

# install
 ```
 npm i image-preview-npm
 ```
 
# Initialize the image object
```javascript
   import Image from 'legendary-image-preview';

 
   //use the image's getBase64Image function in your handler to get the base64 image and set it as the source of the img tag like so:\
   function ImagePreview(){
    const  [imageSource,setImageSource] = useState('');
    const  handleChange = (e) => {
    let image  = new Image(e.target.files);
    setImageSource(image.getBase64Image());
 }
 return(
 <div>
      <input onChange={handleChange} type='file'/>
      <img src={image} alt='preview' />
     </div>
 )
 }
 export default ImagePreview;
 ```
   
