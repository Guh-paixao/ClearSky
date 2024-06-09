import HorizontalScroll from '@/components/WeatherHorizontal';
import { render } from '@testing-library/react-native'

describe('HorizontalScroll', () => {
    test('renderizar HorizontalScroll', () => {
        const { getByTestId, getAllByTestId } = render(<HorizontalScroll />)


        expect(getAllByTestId('Sun')).toBeTruthy();
    });
})

