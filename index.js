export default class Image {
  files;
  file;
  baseImage;
  constructor(files){
    this.files = files;
  }
  getBase64Image = () => {
    return new Promise(resolve => {
      this.file = this.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onloadend = () => {
       this.baseImage = reader.result;
       resolve(this.baseImage);
      };
    })
  }
}
