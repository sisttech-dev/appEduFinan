import AsyncStorage from '@react-native-async-storage/async-storage';

import { OBJETIVO_COLLECTION } from '@storage/storageConfig';

export async function objetivoGetAll() {
    try {
        const storage = await AsyncStorage.getItem(OBJETIVO_COLLECTION);

        const objetivo: string[] = storage ? JSON.parse(storage) : [];

        return objetivo;
    } catch (error) {
        throw error;
    }
}