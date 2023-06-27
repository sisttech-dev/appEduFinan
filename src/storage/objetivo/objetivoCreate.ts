import AsyncStorage from '@react-native-async-storage/async-storage';

import { objetivoGetAll } from './objetivoGetAll';
import { OBJVIDASOCIAL_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

export async function objetivoCreate(newObjetivo: object) {
    try {
        const storedObjetivos = await objetivoGetAll();
        
        const groupAlreadyExists = storedObjetivos.includes(newObjetivo.objetivo);      
        if (groupAlreadyExists) {
            throw new AppError('Já existe um objetivo cadastrado com esse nome.')
        }

        const storage = JSON.stringify([...storedObjetivos, newObjetivo])
        await AsyncStorage.setItem(OBJVIDASOCIAL_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}