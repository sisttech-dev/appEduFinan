import AsyncStorage from '@react-native-async-storage/async-storage';

import { OBJVIDASOCIAL_COLLECTION } from '@storage/storageConfig';

export async function objetivoGetAll() {
    try {
        const storage = await AsyncStorage.getItem(OBJVIDASOCIAL_COLLECTION);

        const objetivos: string[] = storage ? JSON.parse(storage) : [];
        

        return objetivos;
    } catch (error) {
        throw error;
    }
}