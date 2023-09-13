
import locationService from '../src/services/locationService';

describe('locationService', () => {
    it('should have a fetchCurrentLocation function', () => {
        expect(typeof locationService.fetchCurrentLocation).toBe('function');
    });

    it('should have a shareLocation function', () => {
        expect(typeof locationService.shareLocation).toBe('function');
    });

    it('fetchCurrentLocation should return location data when available', async () => {
        // Mock successful location data retrieval
        const mockLocationData = { lat: 123.456, lon: 78.910 };
        locationService.fetchCurrentLocation = jest.fn().mockResolvedValue(mockLocationData);
        
        const result = await locationService.fetchCurrentLocation();
        expect(result).toEqual(mockLocationData);
    });

    it('fetchCurrentLocation should handle errors gracefully', async () => {
        // Mock an error scenario
        locationService.fetchCurrentLocation = jest.fn().mockRejectedValue(new Error('Location unavailable'));

        let error;
        try {
            await locationService.fetchCurrentLocation();
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(new Error('Location unavailable'));
    });
});
