import AsyncStorage from '@react-native-async-storage/async-storage';

import { objetivoGetAll } from './objetivoGetAll';
import { OBJETIVO_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

export async function objetivoCreate(newObjetivo: string) {
    try {
        const storedObjetivos = await objetivoGetAll();
        const objetivoAlreadyExists = storedObjetivos.includes(newObjetivo);

        if (!objetivoAlreadyExists){
            throw new AppError('Já existe um objetivo com esse nome');
        }

        const storage = JSON.stringify([...storedObjetivos, newObjetivo])
        await AsyncStorage.setItem(OBJETIVO_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}