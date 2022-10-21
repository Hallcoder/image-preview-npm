export default class image{
    files;
    file;
    baseImage;
    constructor(files){
    this.files = files;
    }
    getBase64Image(){
            this.file = this.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onloadend = () => {
              baseImage =  reader.result;
            };
        return image;
    }
}