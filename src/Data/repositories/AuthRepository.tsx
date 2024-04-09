import { AxiosError } from 'axios';
import { User } from '../../Domain/entities/User';
import { AuthRepository } from '../../Domain/repositories/AuthRepository';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseApiDelivery} from '../sources/remote/models/ResponseApiDelivery';
import { ImagePickerAsset } from 'expo-image-picker';
import mime from 'mime';


export class AuthRepositoryImp implements AuthRepository{

    async register(user: User): Promise<ResponseApiDelivery>{
        try {

            const response = await  ApiDelivery.post<ResponseApiDelivery>('/users/create',user)
            return Promise.resolve(response.data);

        } catch (error) {

            let e = (error as AxiosError);
            console.log('ERROR'+ JSON.stringify(e.response?.data));
            const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
    async registerWithImage(user: User, file: ImagePickerAsset): Promise<ResponseApiDelivery> {
        try {
            let data = new FormData();

            data.append('user', JSON.stringify(user));
            
            data.append('image', {
                uri: file.uri,
                type: mime.getType(file.uri) || 'image/jpeg', // Usar 'image/jpeg' como tipo predeterminado si mime.getType(file.uri) es nulo
                name: file.uri.split('/').pop() || 'image.jpg' // Usar 'image.jpg' como nombre predeterminado si no se puede obtener un nombre del archivo
            } as any);

            const response = await  ApiDelivery.post<ResponseApiDelivery>('/users/registerWithImage',user)
            return Promise.resolve(response.data);

        } catch (error) {

            let e = (error as AxiosError);
            console.log('ERROR'+ JSON.stringify(e.response?.data));
            const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async login(email: string, password:string): Promise<ResponseApiDelivery>{
        try {

            const response = await  ApiDelivery.post<ResponseApiDelivery>('/users/login',{
                email: email,
                password: password
            })
            return Promise.resolve(response.data);

        } catch (error) {

            let e = (error as AxiosError);
            console.log('ERROR'+ JSON.stringify(e.response?.data));
            const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
    
    




}