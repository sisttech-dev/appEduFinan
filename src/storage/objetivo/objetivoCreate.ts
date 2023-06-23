import AsyncStorage from '@react-native-async-storage/async-storage';

import { objetivoGetAll } from './objetivoGetAll';
import { OBJETIVO_COLLECTION } from '@storage/storageConfig';

export async function objetivoCreate(newObjetivo: string) {
    try {
        await AsyncStorage.setItem(OBJETIVO_COLLECTION, newObjetivo);
        const storedObjetivos = await objetivoGetAll();

        const storage = JSON.stringify([...storedObjetivos, newObjetivo])
        await AsyncStorage.setItem(OBJETIVO_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}