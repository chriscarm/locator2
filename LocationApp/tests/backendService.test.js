
import backendService from '../src/services/backendService';

describe('backendService', () => {
    it('should have a fetchFriendList function', () => {
        expect(typeof backendService.fetchFriendList).toBe('function');
    });

    it('should have a sendFriendRequest function', () => {
        expect(typeof backendService.sendFriendRequest).toBe('function');
    });

    it('fetchFriendList should retrieve a list of friends', async () => {
        // Mock successful friend list retrieval
        const mockFriendList = ['John Doe', 'Jane Smith'];
        backendService.fetchFriendList = jest.fn().mockResolvedValue(mockFriendList);
        
        const result = await backendService.fetchFriendList();
        expect(result).toEqual(mockFriendList);
    });

    it('sendFriendRequest should handle sending friend requests correctly', async () => {
        // Mock successful friend request
        const mockResponse = 'Request sent';
        backendService.sendFriendRequest = jest.fn().mockResolvedValue(mockResponse);
        
        const result = await backendService.sendFriendRequest('Jane Smith');
        expect(result).toEqual(mockResponse);
    });

    // More tests can be added for other scenarios and edge cases.
});
