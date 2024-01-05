import React from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { ReactNode } from 'react';

// interface ImageProps {
//   src: string;
//   alt: string;
// }

// const Image: React.FC<ImageProps> = ({ src, alt }) => {
//   return <img src={src} alt={alt} style={{ width: '240px', height: 'auto' }} />;
// };


// const ImageGallery: React.FC = ({imagePath,index,children}:{imagePath:string[],index:number,children:ReactNode}) => {
//   return (
//     <div>
//       {imagePaths.map((imagePath, index) => (
//         <Image
//           key={index}
//           src={imagePath}
//           alt={`Image ${index}`}
//         /> 
//       ))}
//       {children}
//     </div>
//   );
// };


// const App: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const uploadedFile = event.target.files[0];
//       setFile(uploadedFile);
//     }
//   };

//   const handleUpload = () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);

//       axios
//         .post('http://localhost:3000/api/v2/files', formData)
//         .then((response) => {
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   //---------------------------------
//   const [keys, setKeys] = React.useState([""]);

//   const deleteData = async () => {
//     try {
//       const response: JSON = await axios.delete("http://localhost:3000/api/v2/files");
//       console.log(response); // 応答のデータを表示するなどの処理を追加できます
//       setKeys(Object.keys(response));
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   const imagePaths: string[] = keys;


//   //---------------------------------

//   return (
//     <div>
//       <h1>SKLAB-MicroplateReader</h1>
//       <input type="file" onChange={handleFileUpload} />
//       <button onClick={handleUpload}>Upload</button>
//       <br />
//       <br />
//       <button onClick={deleteData}>Reset</button>
//       <h1>Figures</h1>
//       <ImageGallery> <Image/> </ImageGallery> 
//     </div>
//   );
// };


const App = () => {
  return (
    <p>text</p>
  );
};


export default App;
