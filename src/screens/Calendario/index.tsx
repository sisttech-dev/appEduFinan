
import * as S from './styles';
import React, { useState } from 'react';
import { Calendar} from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export function Calendario() {

    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);

    const calendarTheme: CalendarTheme = {
        // Estilos do calendário
        backgroundColor: 'white',
        calendarBackground: 'white',
        textSectionTitleColor: 'black',
        selectedDayBackgroundColor: '',
        selectedDayTextColor: '#FF4673',
        todayTextColor: '#FF4673',
        dayTextColor: 'black',
        textDisabledColor: 'gray',
        dotColor: '#FF4673',
        selectedDotColor: 'white',
        arrowColor: '#FF4673',
        monthTextColor: 'black',
        textDayFontWeight: 'bold',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: 'bold',
    };

    function handleDateSelect(date) {
        setSelectedDate(date.dateString);
    }


    return (

        <S.Container>
            {/* botão Voltar */}
            <S.BtnBack>
                <Ionicons
                    name='md-caret-back'
                    color={"#ffff"}
                    size={30}
                />
                <S.TextBack>Voltar</S.TextBack>
            </S.BtnBack>


            {/* cores */}
            <S.Container>
                <Calendar
                    theme={calendarTheme}
                    style={S.styles.calendar}
                    onDayPress={handleDateSelect} />
                <S.btn>
                    <S.TextBack>Anotação</S.TextBack>
                </S.btn>
            </S.Container>
        </S.Container>

    )
}
