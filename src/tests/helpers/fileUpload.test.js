import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'duzj6splc', 
    api_key: '269124295857376', 
    api_secret: 'GyuEENKu8tcrxvAx3nLav8z1ESM' 
});

describe('pruebas en File Upload', ()=>{

    test('debe de cargar un archivo y retornar el URL', async()=>{

        const img = await fetch('https://s3-us-west-2.amazonaws.com/lasaga-blog/media/images/grupo_imagen.original.jpg');
        const blob = await img.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        
        expect(typeof url).toBe('string');

        //Borrar imagen por ID

        const segments = url.split('/');
        const imgID = segments[segments.length - 1].replace('.jpg', '');
        
        cloudinary.v2.api.delete_resources(imgID);

    });
    
    test('debe de retornar un error', async()=>{

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);
                
        expect(url).toBe(null);

    });

})