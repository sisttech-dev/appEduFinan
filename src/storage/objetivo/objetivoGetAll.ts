import AsyncStorage from '@react-native-async-storage/async-storage';

import { VIDASOCIAL_COLLECTION } from '@storage/storageConfig';

export async function objetivoGetAll() {
    try {
        const storage = await AsyncStorage.getItem(VIDASOCIAL_COLLECTION);

        const objetivos: string[] = storage ? JSON.parse(storage) : [];
        
        return objetivos;
    } catch (error) {
        throw error;
    }
}