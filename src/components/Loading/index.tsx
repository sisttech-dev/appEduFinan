import { Spinner, Center } from 'native-base'

export function Loading() {
  return (
    <Center flex ={1} bg="COLORS.RED">
   <Spinner color={"#fff"}/>
    </Center>
  );
}